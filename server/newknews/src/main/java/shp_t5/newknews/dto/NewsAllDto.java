package shp_t5.newknews.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "뉴스 정보", description = "기사 분류, 헤드라인, 링크, 찬반여부, 찬반여부 true면 어떤측면인지 요소를 가진 Domain Class")
public class NewsAllDto {
    @ApiModelProperty(value = "클러스터링 분류")
    public String cluster_num;
    @ApiModelProperty(value = "기사 분류")
    public String subject; // 기사 분류 ex 정치, 문화 ..
    @ApiModelProperty(value = "기사 헤드라인")
    public String headline; // 기사 헤드라인

    @ApiModelProperty(value = "기사 내용")
    public String content; // 기사 헤드라인

    @ApiModelProperty(value = "언론사")
    public String press;
    @ApiModelProperty(value = "이미지 링크")
    public String image_link;
    @ApiModelProperty(value = "기사 링크")
    public String news_link; //기사 링크


    public NewsAllDto( String subject, String headline, String content, String press, String image_link, String news_link) {
        this.subject = subject;
        this.headline = headline;
        this.content = content;
        this.press = press;
        this.image_link = image_link;
        this.news_link = news_link;
    }
}
