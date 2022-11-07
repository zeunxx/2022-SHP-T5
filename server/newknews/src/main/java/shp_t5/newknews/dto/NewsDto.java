package shp_t5.newknews.dto;

import lombok.Data;

@Data
public class NewsDto {
    public String subject; // 기사 분류 ex 정치, 문화 ..
    public String headline; // 기사 헤드라인
    public String link; //기사 링크
    public boolean discuss; // 찬반여부, true면 주제 나뉘는 기사, false면 그냥 정보 제공 기사 등..
    public String yn=null; // discuss가 true면 찬성/반대/진보/보수/칭찬/비판 등

}
