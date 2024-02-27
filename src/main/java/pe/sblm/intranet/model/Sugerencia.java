package pe.sblm.intranet.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Sugerencia {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
	@Column(length = 100)
    private String usuario;
    
	@Column(length = 200)
    private String gerencia;
    
	@Column(length = 1000)
    private String contenido;
	
	@Column(length = 30)
	private String fecha;
	
	public Sugerencia() {
		
	}

	public Sugerencia(String usuario, String gerencia, String contenido, String fecha) {
		super();
		this.usuario = usuario;
		this.gerencia = gerencia;
		this.contenido = contenido;
		this.fecha = fecha;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getGerencia() {
		return gerencia;
	}

	public void setGerencia(String gerencia) {
		this.gerencia = gerencia;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	
}
