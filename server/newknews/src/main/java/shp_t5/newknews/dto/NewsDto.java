package shp_t5.newknews.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
@ApiModel(value = "뉴스 정보", description = "기사 분류, 헤드라인, 링크, 찬반여부, 찬반여부 true면 어떤측면인지 요소를 가진 Domain Class")
public class NewsDto {
    @ApiModelProperty(value = "기사 분류")
    public String subject; // 기사 분류 ex 정치, 문화 ..
    @ApiModelProperty(value = "기사 헤드라인")
    public String headline; // 기사 헤드라인
    @ApiModelProperty(value = "기사 링크")
    public String link; //기사 링크
    @ApiModelProperty(value = "기사 찬반여부")
    public boolean discuss; // 찬반여부, true면 주제 나뉘는 기사, false면 그냥 정보 제공 기사 등..
    @ApiModelProperty(value = "기사 관점")
    public String yn=null; // discuss가 true면 찬성/반대/진보/보수/칭찬/비판 등

}
