package com.example.demo.dao;



import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import com.example.demo.entities.Pharmacie;


public interface PharmacieRepository extends JpaRepository<Pharmacie, Integer>{
	
	@Query("select p from Pharmacie p where p.id = :x")
	public Pharmacie findOne(@Param("x")Integer id);

	
	
	public List<Pharmacie>  findByNomContains(String mc);
	
	
}
