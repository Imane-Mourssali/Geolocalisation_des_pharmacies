package com.example.demo.web;

import java.io.Console;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dao.PharmacieRepository;
import com.example.demo.entities.Pharmacie;

@CrossOrigin("*")
@RestController
public class PharmacieRestService {

	@Autowired
	private PharmacieRepository pharmacieRepository;

	@RequestMapping(value = "/pharmacie", method = RequestMethod.GET)

	public List<Pharmacie> getAllPharmacie() {
		return pharmacieRepository.findAll();
	}

	@RequestMapping(value = "/pharmacie/{id}", method = RequestMethod.GET)
	public Pharmacie getPharmacieById(@PathVariable Integer id) {
		return pharmacieRepository.findById(id).get();
	}
	

	@RequestMapping(value = "/pharmacie", method = RequestMethod.POST)

	public Pharmacie save(@RequestBody Pharmacie pharmacie) {
		return pharmacieRepository.save(pharmacie);
	}

	@RequestMapping(value = "/pharmacie/{id}", method = RequestMethod.DELETE)

	public boolean delete(@PathVariable Integer id) {
		pharmacieRepository.deleteById(id);
		return true;
	}

	@RequestMapping(value = "/pharmacie/{id}", method = RequestMethod.PUT)
	
	public boolean update(@PathVariable Integer id, @RequestBody Pharmacie pharmacie) {
		pharmacie.setId(id);
		pharmacieRepository.save(pharmacie);
		return true;
	}
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@RequestMapping(value = "/chercherParmacie", method = RequestMethod.POST)
	public List<Pharmacie> chercherPharmacie(@RequestBody String mc) {
		List<Pharmacie> p = pharmacieRepository.findByNomContains(mc);
		System.out.println(p);
		return p;
	}

	@GetMapping(path = "/photoPharm/{id}/{pn}", produces = MediaType.IMAGE_PNG_VALUE)
	public byte[] getPhoto(@PathVariable("id") Integer id) throws Exception {
		Pharmacie p = pharmacieRepository.findById(id).get();
		return Files.readAllBytes(Paths.get(System.getProperty("user.home") + "/Pharm/photo/" + p.getPhoto()));
	}
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping(path = "/uploadPhoto/{id}")
	public void uploadPhoto(MultipartFile file, @PathVariable Integer id) throws Exception {
		Pharmacie p = pharmacieRepository.findById(id).get();
		p.setPhoto(file.getOriginalFilename());
		Files.write(Paths.get(System.getProperty("user.home") + "/Pharm/photo/" + p.getPhoto()), file.getBytes());
		pharmacieRepository.save(p);
	}
}
