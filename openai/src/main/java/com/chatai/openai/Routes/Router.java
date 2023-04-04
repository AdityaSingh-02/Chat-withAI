package com.chatai.openai.Routes;


import com.chatai.openai.Dao.OpenAiDao;
import com.chatai.openai.entity.GPT;
import com.chatai.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
@RequestMapping(value = "/v1/api/login")
public class Router {

    @Autowired
    OpenAiService openAiService;

    @Autowired
    OpenAiDao openAiDao;

    @PostMapping(value = "/auth")
    public GPT AddApiKey(@RequestBody GPT api){
        return openAiService.loginAPI(api);
    }

    @GetMapping(value = "/getAuth")
    List<GPT> getAuth (){
        return (List<GPT>) openAiDao.findAll();
    }
}
