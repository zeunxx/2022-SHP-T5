package shp_t5.newknews.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "키워드 정보", description = "키워드, 우선순위를 가진 Domain Class")
public class KeywordDto {
    @ApiModelProperty(value = "키워드")
    public String keyword;
    @ApiModelProperty(value = "기사 우선순위")
    public String priority; // 키워드 우선순위 낮을수록 중요한 키워드?

    public KeywordDto(String keyword, String priority) {
        this.keyword = keyword;
        this.priority = priority;
    }
}
