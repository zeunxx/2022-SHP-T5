package shp_t5.newknews.dto;

import lombok.Data;

@Data
public class KeywordDto {
    public String keyword;
    public int priority; // 키워드 우선순위 낮을수록 중요한 키워드?
    public NewsDto newsDto; //어떤 뉴스와 연관되어 있는지? 근데 키워드 선택해서 뉴스 보여주거나 그런거 없으면 안해도 될듯
}
