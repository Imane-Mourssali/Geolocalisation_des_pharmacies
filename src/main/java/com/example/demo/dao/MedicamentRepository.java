package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Medicament;


public interface MedicamentRepository extends JpaRepository<Medicament, Integer> {

}
