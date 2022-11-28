import pandas as pd
import csv
import math

# df = pd.read_csv('politics_labeling_for_posneg.csv', encoding='cp949',
# names=['cluster_num', 'title', 'content', 'url', 'possitive', 'negative', 'posneg'])
filename = 'pogneg\positive_negative_sample.csv'
df = pd.read_csv(filename, encoding='utf-8-sig', header=0)
df = df.assign(posneg="-1")
#[cluster_num | title | content | url | positive | negative]

# filename = 'pogneg_politics.csv'
filename2 = 'pogneg\pogneg_sample.csv'
f = open(filename2, 'w', encoding='utf-8-sig', newline='')
fwriter = csv.writer(f)

pn_count_list = [] # cluster_num 순으로 tuple(pos 수, neg 수)
pn_gap_list = [] # cluster_num 순으로 list[(idx, gap), ...]
add_row_list = [] # 상위 10개에 든 기사 tuple(cluster_num, [idx,...])

cluster_num_list = pd.unique(df['cluster_num']).tolist() # [1, 2, ...]
# print(cluster_num_list)
one = [1] * len(cluster_num_list)
cluster_idx_list = [cluster_num_list[i] - one[i] for i in range(len(cluster_num_list))]
# print(cluster_idx_list) # [0, 1, ...]

# cluster_idx 당 긍부정수 세기, 긍부정 차이 계산
for cluster_idx in cluster_idx_list: # 0~
    pos_count = 0
    neg_count = 0
    temp_gap = []
    for idx, row in df.iterrows(): # 한 줄
        if row['cluster_num']-1 == cluster_idx:
            if row['positive'] > row['negative']:
                pos_count += 1
                df.at[idx, 'posneg'] = '1' # 기사 긍정
            else:
                neg_count += 1
                df.at[idx, 'posneg'] = '0' # 기사 부정
            gap = float(row['positive']) - float(row['negative'])
            temp_gap.append([idx, round(gap, 2)])
    pn_count_list.append((pos_count, neg_count))
    # print('before) cluster num ', cluster_idx+1, ' | ', temp_gap)
    temp_gap.sort(key=lambda x:-x[1]) # 긍부정 차이 기준 내림차순 정렬
    # print('after) cluster num ', cluster_idx+1, ' | ', temp_gap)
    pn_gap_list.append(temp_gap)
    # print('cluster num ', cluster_idx+1, ' | 긍정수 ', pn_count_list[cluster_idx][0],
    #     ', 부정수 ', pn_count_list[cluster_idx][1])
print(pn_gap_list)

# 5개를 기준으로 cluster_idx 당 기사 10개 추출
for cluster_idx in cluster_idx_list: # 0~
    p_count = pn_count_list[cluster_idx][0] # 긍정수
    n_count = pn_count_list[cluster_idx][1] # 부정수
    ten_idx_list = []
    if (p_count + n_count) > 10:
        # case 1: 긍부정 각 5개
        if p_count >= 5 and n_count >= 5:
            # 긍정 idx 추가
            ten_list_p = pn_gap_list[cluster_idx][0:5] # list[(idx,gap)...]
            for t in ten_list_p:
                ten_idx_list.append(t[0]) # list[idx...]
            # 부정 idx 추가
            ten_list_n = pn_gap_list[cluster_idx][-1:-6:-1] # list[(idx,gap)...]
            for t in ten_list_n:
                ten_idx_list.append(t[0]) # list[idx...]
            add_row_list.append((cluster_idx+1, ten_idx_list))
        # case 2: 0<긍정<5 + 나머지 부정
        elif p_count > 0 and p_count < 5 and n_count > 5:
            # 긍정 idx 추가
            ten_list_p = pn_gap_list[cluster_idx][0:p_count] # list[(idx,gap)...]
            for t in ten_list_p:
                ten_idx_list.append(t[0]) # list[idx...]
            # 부정 idx 추가
            rest = 10 - p_count
            ten_list_n = pn_gap_list[cluster_idx][-1:-(1+rest):-1] # list[(idx,gap)...]
            for t in ten_list_n:
                ten_idx_list.append(t[0]) # list[idx...] # 나머지 부정 idx 추가
            add_row_list.append((cluster_idx+1, ten_idx_list))
        # case 3: 0<부정<5 + 나머지 긍정
        elif n_count > 0 and n_count < 5 and p_count > 5:
            # 긍정 idx 추가
            rest = 10 - n_count
            ten_list_p = pn_gap_list[cluster_idx][0:rest] # list[(idx,gap)...]
            for t in ten_list_p:
                ten_idx_list.append(t[0]) # list[idx...]
            # 부정 idx 추가
            ten_list_n = pn_gap_list[cluster_idx][-1:-(1+n_count):-1] # list[(idx,gap)...]
            for t in ten_list_n:
                ten_idx_list.append(t[0]) # list[idx...]
            add_row_list.append((cluster_idx+1, ten_idx_list))

print(add_row_list)

for i in add_row_list: # i = (cluster_num, [df_idx...])
    add_idx = i[1] # [df_idx...]
    for j in add_idx:
        df_row = df.loc[j]
        # print(df.loc[j])
        fwriter.writerow([df_row['cluster_num'], df_row['title'], df_row['url'], df_row['positive'], df_row['negative'], df_row['posneg']])
        # fwriter.writerow([df_row['cluster_num'], df_row['title'], df_row['url'], df_row['posneg']])