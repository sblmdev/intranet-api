package pe.sblm.intranet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pe.sblm.intranet.service.TrabajadorService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/trabajador")
@CrossOrigin(origins = "*")
public class TrabajadorControlador {

    private final TrabajadorService trabajadorService;

    @Autowired
    public TrabajadorControlador(TrabajadorService trabajadorService) {
        this.trabajadorService = trabajadorService;
    }

    @GetMapping("/{dni}")
    public List<Map<String, Object>> getTrabajadorByDni(@PathVariable String dni) {
        return trabajadorService.obtenerTrabajadorPorDni(dni);
    }
}
