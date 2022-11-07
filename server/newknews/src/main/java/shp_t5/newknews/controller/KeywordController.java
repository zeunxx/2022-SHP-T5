package shp_t5.newknews.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import shp_t5.newknews.dto.KeywordDto;

import java.io.*;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

@RestController
public class KeywordController {
    List<KeywordDto> listKeywordDto = new ArrayList<>();

    KeywordController() throws IOException {
        File keywordcsv = new File("C:\\Users\\82105\\OneDrive\\바탕 화면\\newknews\\2022-SHP-T5\\server\\newknews\\src\\main\\resources\\csv\\keyword_test_file.csv");
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(keywordcsv),"UTF-8"));
        Charset.forName("UTF-8");

        String newsline = "";

        while((newsline = br.readLine())!=null) {
            String testCut[] = newsline.split(",");

            KeywordDto keywordDto = new KeywordDto(testCut[0], testCut[1]);
            listKeywordDto.add(keywordDto);
        }


    }

    @GetMapping("getKeyword")
    public List<KeywordDto> getKeyword(){
        return listKeywordDto;
    }
}
