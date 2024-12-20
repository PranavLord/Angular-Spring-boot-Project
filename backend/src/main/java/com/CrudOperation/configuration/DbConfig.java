package com.CrudOperation.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import javax.sql.DataSource;


@Configuration
public class DbConfig {
	
	 @Bean
	    public JdbcTemplate dbCon(DataSource dataSource) {
	        return new JdbcTemplate(dataSource);
	    }

}
