package shp_t5.newknews.dto;

import lombok.Data;

import java.util.List;

@Data
public class NewsListDto {
    private List<TestNewsDto> listNews;
}
