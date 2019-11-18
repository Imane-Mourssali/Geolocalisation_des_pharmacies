package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.example.demo.dao.PharmacieRepository;


@SpringBootApplication
public class PfaApplication implements CommandLineRunner{

//	@Autowired
//	private PharmacieRepository pharmacieRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(PfaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	
		// TODO Auto-generated method stub
		//pharmacieRepository.save(new Pharmacie("pharm1", "0625525252","pharm1.png", "azcc cdd d", 203.33, 10.3, 50.1));
	}
	
	

}
