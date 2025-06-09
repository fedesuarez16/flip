import Article from "@/components/blog/article";

export default function SeguridadWebModerna() {
  return (
    <Article
      title="Mejorando la seguridad en aplicaciones web modernas"
      description="Las amenazas de seguridad evolucionan constantemente. Aprende qué medidas implementar para proteger tus aplicaciones web contra las vulnerabilidades más comunes y emergentes."
      image="/news/web-security.jpg"
      date="21 de junio, 2023"
      author="Alejandro Ruiz"
      category="Seguridad"
      content={`
        <h2>El panorama de seguridad web en 2023</h2>
        <p>
          A medida que las aplicaciones web se vuelven más complejas y manejan datos más sensibles, 
          la seguridad se convierte en una <strong>preocupación primordial</strong>. Las amenazas evolucionan constantemente, 
          y los atacantes emplean técnicas cada vez más sofisticadas para comprometer sistemas.
        </p>
        
        <blockquote>
          "La seguridad no es un producto, sino un proceso. No se trata de construir un muro impenetrable, 
          sino de mantener una vigilancia constante y adaptarse a las amenazas cambiantes."
        </blockquote>
        
        <h3>Vulnerabilidades más comunes</h3>
        <p>
          A pesar de los avances en seguridad, muchas aplicaciones web siguen siendo vulnerables a 
          ataques bien conocidos:
        </p>
        
        <ul>
          <li><strong>Inyecciones (SQL, NoSQL, OS):</strong> <em>Cuando datos no confiables se envían a un intérprete como parte de un comando o consulta</em>
          <pre><code>
// Vulnerable a inyección SQL
const query = "SELECT * FROM users WHERE username = '" + username + "'";
          </code></pre>
          </li>
          <li><strong>Cross-Site Scripting (XSS):</strong> <em>Ocurre cuando una aplicación incluye datos no confiables en una página web sin validación adecuada</em></li>
          <li><strong>Cross-Site Request Forgery (CSRF):</strong> <em>Fuerza a un usuario autenticado a ejecutar acciones no deseadas</em></li>
          <li><strong>Exposición de datos sensibles:</strong> <em>Falta de protección adecuada para datos como credenciales, información personal o financiera</em></li>
          <li><strong>Fallas en el control de acceso:</strong> <em>Restricciones inadecuadas sobre lo que los usuarios autenticados pueden hacer</em></li>
        </ul>
        
        <div style="background-color: rgba(255, 0, 0, 0.05); border-left: 4px solid rgba(255, 0, 0, 0.5); padding: 1rem; margin: 2rem 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin-top: 0; color: rgba(255, 0, 0, 0.8);">⚠️ Dato importante</h4>
          <p style="margin-bottom: 0;">
            Según el <a href="https://owasp.org/Top10/" target="_blank">OWASP Top 10</a>, las inyecciones y fallos de autenticación siguen siendo las vulnerabilidades más explotadas en aplicaciones web.
          </p>
        </div>
        
        <h3>Estrategias de seguridad esenciales</h3>
        
        <h4>1. Adoptar el principio de defensa en profundidad</h4>
        <p>
          No depender de una sola capa de seguridad. Implementar <u>múltiples controles</u> que aborden 
          diferentes aspectos de la seguridad:
        </p>
        <ul>
          <li><strong>Seguridad de la red</strong> (firewalls, WAF)</li>
          <li><strong>Seguridad de la aplicación</strong> (validación de entrada, codificación de salida)</li>
          <li><strong>Seguridad de los datos</strong> (encriptación, tokenización)</li>
        </ul>
        
        <h4>2. Implementar autenticación robusta</h4>
        <p>
          Fortalecer los mecanismos de autenticación mediante:
        </p>
        <ul>
          <li><strong>Autenticación multifactor (MFA)</strong> - <em>Algo que sabes + algo que tienes + algo que eres</em></li>
          <li><strong>Políticas de contraseñas seguras</strong> - <em>Longitud mínima, complejidad, evitar patrones comunes</em></li>
          <li><strong>Limitación de intentos fallidos</strong> - <em>Protección contra ataques de fuerza bruta</em></li>
          <li><strong>Uso de tokens JWT</strong> - <em>Con tiempos de expiración adecuados y rotación</em></li>
        </ul>
        
        <img src="https://www.hostingplus.com.co/wp-content/uploads/2021/08/mfa.jpg" 
             alt="Autenticación Multifactor" 
             style="max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        
        <h4>3. Aplicar el principio de mínimo privilegio</h4>
        <p>
          Otorgar a usuarios y sistemas <strong>solo los permisos necesarios</strong> para realizar sus funciones, 
          ni más ni menos. Esto limita el impacto potencial de una cuenta comprometida.
        </p>
        
        <h4>4. Mantenerse actualizado</h4>
        <p>
          Las vulnerabilidades se descubren constantemente en frameworks y bibliotecas. Mantener todas 
          las dependencias actualizadas es crucial para la seguridad:
        </p>
        <ul>
          <li>Utilizar herramientas de <strong>análisis de dependencias</strong> (<code>npm audit</code>, <code>OWASP Dependency Check</code>)</li>
          <li>Establecer procesos de <strong>actualización regulares</strong></li>
          <li>Suscribirse a <strong>alertas de seguridad</strong> relevantes</li>
        </ul>
        
        <h3>Tendencias emergentes en seguridad web</h3>
        
        <h4>DevSecOps</h4>
        <p>
          Integrar la seguridad en el ciclo de vida del desarrollo, desde el diseño hasta la implementación:
        </p>
        <ul>
          <li><strong>Análisis de código estático (SAST)</strong> - <em>Identifica vulnerabilidades en el código fuente</em></li>
          <li><strong>Análisis de código dinámico (DAST)</strong> - <em>Prueba aplicaciones en ejecución</em></li>
          <li><strong>Pruebas de penetración automatizadas</strong> - <em>Simula ataques para encontrar debilidades</em></li>
          <li><strong>Revisiones de código enfocadas en seguridad</strong> - <em>Incorpora criterios de seguridad en los code reviews</em></li>
        </ul>
        
        <div style="display: flex; justify-content: center; margin: 2rem 0;">
          <img src="https://www.synopsys.com/content/dam/synopsys/sig-assets/images/devsecops.jpg.imgw.850.x.jpg" 
               alt="Ciclo DevSecOps" 
               style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        </div>
        
        <h4>Zero Trust Architecture</h4>
        <p>
          Adoptar un enfoque que <strong>no confía en nada por defecto</strong>, tanto dentro como fuera de la red:
        </p>
        <ul>
          <li><em>Verificar siempre, nunca confiar</em></li>
          <li><em>Limitar el acceso por segmentación</em></li>
          <li><em>Asumir una posible brecha</em></li>
        </ul>
        
        <h2>Conclusión</h2>
        <p>
          La seguridad web no es un producto o una solución única, sino un <strong>proceso continuo</strong>. 
          Al implementar múltiples capas de defensa, mantener actualizados los sistemas, 
          adoptar prácticas de desarrollo seguro y seguir las tendencias emergentes, 
          las organizaciones pueden proteger eficazmente sus aplicaciones web contra 
          las amenazas actuales y futuras.
        </p>
      `}
    />
  );
} 