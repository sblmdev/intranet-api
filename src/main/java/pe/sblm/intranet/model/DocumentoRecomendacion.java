package pe.sblm.intranet.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Value;

@Entity
public class DocumentoRecomendacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    private int numero;
    
    private long idPlan;
    
    @Column(length = 200)
    private String urlDocumento;
    
    @Column(length = 200)
    private String nombreDocumento;
    
    @Column(length = 30)
    private String fechaDocumento;
    
    public DocumentoRecomendacion() {
    	
    }

	public DocumentoRecomendacion(int numero, long idPlan, String urlDocumento, String nombreDocumento,
			String fechaDocumento) {
		super();
		this.numero = numero;
		this.idPlan = idPlan;
		this.urlDocumento = urlDocumento;
		this.nombreDocumento = nombreDocumento;
		this.fechaDocumento = fechaDocumento;
	}

	public long getIdPlan() {
		return idPlan;
	}

	public void setIdPlan(long idPlan) {
		this.idPlan = idPlan;
	}

	public String getNombreDocumento() {
		return nombreDocumento;
	}

	public void setNombreDocumento(String nombreDocumento) {
		this.nombreDocumento = nombreDocumento;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getFechaDocumento() {
		return fechaDocumento;
	}


	public void setFechaDocumento(String fechaDocumento) {
		this.fechaDocumento = fechaDocumento;
	}


	public String getUrlDocumento() {
		return urlDocumento;
	}

	public void setUrlDocumento(String urlDocumento) {
		this.urlDocumento = urlDocumento;
	}
    
}
