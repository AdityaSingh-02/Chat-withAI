package com.chatai.openai.Dao;

import com.chatai.openai.entity.GPT;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

@Repository
public interface OpenAiDao extends CrudRepository<GPT,Integer> {

}
