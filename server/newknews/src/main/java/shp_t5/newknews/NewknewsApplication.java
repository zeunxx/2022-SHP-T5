package shp_t5.newknews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.net.InetAddress;
import java.net.UnknownHostException;


@SpringBootApplication
public class NewknewsApplication  {


	public static void main(String[] args) {

		SpringApplication.run(NewknewsApplication.class, args);

	}



//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**")
//						.allowedOrigins("*")
//						.allowedMethods(
//								HttpMethod.GET.name(),
//								HttpMethod.POST.name(),
//								HttpMethod.PUT.name(),
//								HttpMethod.DELETE.name(),
//								HttpMethod.PATCH.name())
//						.allowCredentials(false)
//						.maxAge(3600);
//			}
//		};
//	}
}
