package com.example.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.MedicamentRepository;
import com.example.demo.dao.PharmacieRepository;
import com.example.demo.entities.Medicament;
import com.example.demo.entities.Pharmacie;

@CrossOrigin("*")
@RestController
public class MedicamentRestService {
	@Autowired
	private MedicamentRepository medicamentRepository;

	@RequestMapping(value = "/medicament", method = RequestMethod.GET)

	public List<Medicament> getAllMedicaments() {
		return medicamentRepository.findAll();
	}

	@RequestMapping(value = "/medicament/{id}", method = RequestMethod.GET)
	public Medicament getMedicamentById(@PathVariable Integer id) {
		return medicamentRepository.findById(id).get();
	}
	

	@RequestMapping(value = "/medicament", method = RequestMethod.POST)

	public Medicament save(@RequestBody Medicament medicament) {
		return medicamentRepository.save(medicament);
	}

	@RequestMapping(value = "/medicament/{id}", method = RequestMethod.DELETE)

	public boolean delete(@PathVariable Integer id) {
		medicamentRepository.deleteById(id);
		return true;
	}

	@RequestMapping(value = "/medicament/{id}", method = RequestMethod.PUT)
	
	public boolean update(@PathVariable Integer id, @RequestBody Medicament medicament) {
		medicament.setId(id);
		medicamentRepository.save(medicament);
		return true;
	}

}
