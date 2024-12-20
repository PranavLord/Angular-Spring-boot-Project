package com.CrudOperation.CORSMapping;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
	
	 @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**")  // Allow all routes
	                .allowedOrigins("http://localhost:4200")  // Allow requests from Angular frontend
	                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow specific HTTP methods
	                .allowedHeaders("*")  // Allow all headers
	                .allowCredentials(true);  // Allow credentials (cookies, authorization headers)
	    }

}
