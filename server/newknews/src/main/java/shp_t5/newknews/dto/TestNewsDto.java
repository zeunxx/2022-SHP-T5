package shp_t5.newknews.dto;

import lombok.Data;

@Data
public class TestNewsDto {
    public String subject_num;
    public String subject;
    public String title;
    public String url;

    public TestNewsDto(String subject_num, String subject, String title, String url) {
        this.subject_num = subject_num;
        this.subject = subject;
        this.title = title;
        this.url = url;
    }
}
