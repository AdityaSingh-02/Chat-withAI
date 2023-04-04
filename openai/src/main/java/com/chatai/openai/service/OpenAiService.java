package com.chatai.openai.service;

import com.chatai.openai.Dao.OpenAiDao;
import com.chatai.openai.entity.GPT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OpenAiService {

    @Autowired
    OpenAiDao openAiDao;

    public GPT loginAPI(GPT api) {
        return openAiDao.save(api);
    }

}
