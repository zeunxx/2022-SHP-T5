package shp_t5.newknews.dto;

import lombok.Data;

@Data
public class KeywordDto {
    public String keyword;
    public String priority; // 키워드 우선순위 낮을수록 중요한 키워드?

    public KeywordDto(String keyword, String priority) {
        this.keyword = keyword;
        this.priority = priority;
    }
}
