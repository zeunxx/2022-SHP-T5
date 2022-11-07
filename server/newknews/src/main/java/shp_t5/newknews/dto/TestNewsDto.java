package shp_t5.newknews.dto;

import lombok.Data;

@Data
public class TestNewsDto {
    public String subject_num;
    public String subject;
    public String headline;
    public String link;

    public TestNewsDto(String subject_num, String subject, String headline, String link) {
        this.subject_num = subject_num;
        this.subject = subject;
        this.headline = headline;
        this.link = link;
    }
}
