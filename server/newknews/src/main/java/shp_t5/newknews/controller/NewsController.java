package shp_t5.newknews.controller;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import shp_t5.newknews.dto.NewsListDto;
import shp_t5.newknews.dto.TestNewsDto;


import java.io.*;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins="http://localhost:3000", methods={RequestMethod.GET, RequestMethod.POST})
public class NewsController {

    List<TestNewsDto> listTestNewsDto = new ArrayList<>();

    // 파일 읽기
    NewsController() throws IOException {
        File newscsv = new File("C:\\Users\\82105\\OneDrive\\바탕 화면\\산협프 newknews\\2022-SHP-T5\\server\\newknews\\src\\main\\resources\\csv\\clustered_article_sample.csv");
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(newscsv),"UTF-8"));
        Charset.forName("UTF-8");

        String newsline = "";
        int num=0;


        while((newsline = br.readLine())!=null) {
            String testCut[] = newsline.split(",");
            TestNewsDto testNewsDto = new TestNewsDto(testCut[0], testCut[1], testCut[2], testCut[3]);
            listTestNewsDto.add(testNewsDto);
            num++;
        }


    }

    @GetMapping("getNews")
    public List<TestNewsDto> getNews(){

        return listTestNewsDto;
    }

    @GetMapping("getNewsTitle")
    public NewsListDto getNewsTile(String title){

        List<TestNewsDto> filteredNews = listTestNewsDto.stream()
                .filter(n -> n.title.contains(title))
                .collect(Collectors.toList());

        NewsListDto newsListDto = new NewsListDto();
        newsListDto.setListNews(filteredNews);
        return newsListDto;
    }

}











