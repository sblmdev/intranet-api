package pe.sblm.intranet.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.sblm.intranet.model.Sugerencia;
import pe.sblm.intranet.repository.SugerenciaRepositorio;

@RestController
@RequestMapping("/api/sugerencias")
@CrossOrigin(origins = "*")
public class SugerenciaControlador {
	@Autowired
    private SugerenciaRepositorio sugerenciaRepository;

    @PostMapping
    public ResponseEntity<Sugerencia> crearSugerencia(@RequestBody Sugerencia sugerencia) {
        Sugerencia nuevaSugerencia = sugerenciaRepository.save(sugerencia);
        return new ResponseEntity<>(nuevaSugerencia, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sugerencia> actualizarSugerencia(@PathVariable Long id, @RequestBody Sugerencia sugerencia) {
        Optional<Sugerencia> sugerenciaOptional = sugerenciaRepository.findById(id);
        if (sugerenciaOptional.isPresent()) {
            Sugerencia existingSugerencia = sugerenciaOptional.get();
            existingSugerencia.setUsuario(sugerencia.getUsuario());
            existingSugerencia.setGerencia(sugerencia.getGerencia());
            existingSugerencia.setContenido(sugerencia.getContenido());
            existingSugerencia.setFecha(sugerencia.getFecha());
            sugerenciaRepository.save(existingSugerencia);
            return new ResponseEntity<>(existingSugerencia, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarSugerencia(@PathVariable Long id) {
        sugerenciaRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping
    public ResponseEntity<List<Sugerencia>> obtenerTodosSugerencias() {
        List<Sugerencia> sugerencias = sugerenciaRepository.findAll();
        return new ResponseEntity<>(sugerencias, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sugerencia> obtenerSugerenciaPorId(@PathVariable Long id) {
        Optional<Sugerencia> sugerenciaOptional = sugerenciaRepository.findById(id);
        return sugerenciaOptional.map(sugerencia -> new ResponseEntity<>(sugerencia, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
