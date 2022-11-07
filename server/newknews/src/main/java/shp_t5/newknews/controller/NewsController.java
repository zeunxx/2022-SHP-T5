package shp_t5.newknews.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import shp_t5.newknews.dto.KeywordDto;
import shp_t5.newknews.dto.TestNewsDto;

import java.io.*;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;


@RestController
public class NewsController {

    List<TestNewsDto> listTestNewsDto = new ArrayList<>();

    // 파일 읽기
    NewsController() throws IOException {
        File newscsv = new File("C:\\Users\\82105\\OneDrive\\바탕 화면\\newknews\\2022-SHP-T5\\server\\newknews\\src\\main\\resources\\csv\\clustered_article_sample.csv");
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

}











