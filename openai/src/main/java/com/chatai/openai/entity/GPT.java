package com.chatai.openai.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "gptData")
public class GPT {

    @Column(name = "userId")
    private Integer id;

    @Column(name = "ApiKey")
    private String Apikey;

    @Column(name = "userName")
    private String Name;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getApikey() {
        return Apikey;
    }
    public void setApikey(String Apikey) {
        this.Apikey = Apikey;
    }

    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }

}
