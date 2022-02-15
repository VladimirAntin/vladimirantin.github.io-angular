import {b} from "./spring-core.const";

export const examples = [
  {
    title: 'Example 1 (without security/disable security)', yourCode: [
      {
        title: 'MainApplication.java',
        text: `
        ...
        ${b('import com.github.vladimirantin.core.annotation.DisableCoreSecurity;')}
        import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;

        @SpringBootApplication
        ...
        ${b('@DisableCoreSecurity')}
        public class MainApplication {

            public static void main(String[] args) throws Exception {
                SpringApplication.run(MainApplication.class, args);
            }

        }`
      },

    ], generator: []
  },
  {
    title: 'Example 2 (enable default security)', yourCode: [
      {
        title: 'MainApplication.java',
        text: `
        ...
        ${b('import com.github.vladimirantin.core.annotation.EnableCoreSecurity;')}
        import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;

        @SpringBootApplication
        ...
        ${b('@EnableCoreSecurity')}
        public class MainApplication {

            public static void main(String[] args) throws Exception {
                SpringApplication.run(MainApplication.class, args);
            }

        }`
      },
      {
        title: 'User.java',
        text: `
        ...
        ${b('import com.github.vladimirantin.core.security.model.CoreUser;')}
        import javax.persistence.Entity;

        import com.github.vladimirantin.core.GlobalVariables;
        import org.hibernate.annotations.Where;

        @Entity
        @Where(clause = GlobalVariables.WHERE_CLAUSE)
        public class User extends CoreUser {
            .... // your additional properties
        }`
      },
      {
        title: 'UserRepo.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.repo.CoreRepository;')}
      import org.springframework.stereotype.Repository;

      @Repository
      public interface UserRepo extends CoreRepository&lt;User&gt; {
        ...
        Optional&lt;User&gt; findByUsernameAndActiveIsTrue(String username);
        ...
      }`
      },
      {
        title: 'UserService.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.service.CoreModelService;')}
      import org.springframework.stereotype.Service;
      ${b('import com.github.vladimirantin.core.security.service.CoreUserService;')}

      @Service
      public class UserService extends CoreModelService&lt;UserRepo, User&gt; implements CoreUserService {
        ....
        @Override
        public CoreUser getUser(String username) {
            return repo.findByUsernameAndActiveIsTrue(username)
                    .orElseThrow(() -> new UsernameNotFoundException(String.format("No user found with username '%s'.", username)));

        }
        ....
      }`
      },
      {
        title: `application.properties (doesn't required)`,
        text: `
        ....
        # It is default properties
        # bearer.prefix = Bearer
        # bearer.header = Authorization
        # bearer.secret = spring-core-app
        # bearer.expiration = 8
        # security.links.enable = /api/**
        # security.links.disable = /login

        ### For example you can change token duration (in hours)
        bearer.expiration = 1000
        ### You can change Auth header
        bearer.header = X-AUTH-TOKEN
        ### You can change secret for token
        bearer.secret = MY-APP-IS-ONE-OF-THE-BEST
        ### You can change prefix for auth token
        bearer.prefix = JWT

        ### You can change links which doesn't use security
        security.links.disable = /public/favicon.ico
        ### Or else, you can add more than one links
        security.links.disable = /public/favicon.ico, /assets/images/profile.img

        ### You can change links which use security
        security.links.disable = /auth/me
        ### Or else, you can add more than one links
        security.links.disable = /auth/me, /api/**
        ....
      }`
      }

    ], generator: []
  },



];

export const docs = [
  {
    title: 'CoreUser.java',
    text: `
    package com.github.vladimirantin.core.security.model;

    import com.github.vladimirantin.core.GlobalVariables;
    import com.github.vladimirantin.core.model.CoreModel;
    import lombok.EqualsAndHashCode;
    import lombok.Getter;
    import lombok.Setter;
    import org.hibernate.annotations.Where;

    import javax.persistence.MappedSuperclass;
    import javax.validation.constraints.NotNull;
    import javax.validation.constraints.Size;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Email: antin502@gmail.com
     * Date: 13.02.2022
     * Time: 22:22
     */
    @Where(clause = GlobalVariables.WHERE_CLAUSE)
    @MappedSuperclass
    @Getter
    @Setter
    @EqualsAndHashCode
    public class CoreUser extends CoreModel {

        @NotNull
        @Size(min = 2, max = 50)
        private String username;

        @NotNull
        private String password;

        @NotNull
        private boolean active;

    }`
  },
  {
    title: 'Role.java',
    text: `
    package com.github.vladimirantin.core.security.model;

    import com.github.vladimirantin.core.GlobalVariables;
    import com.github.vladimirantin.core.model.CoreModel;
    import lombok.EqualsAndHashCode;
    import lombok.Getter;
    import lombok.Setter;
    import org.hibernate.annotations.Where;

    import javax.persistence.Column;
    import javax.persistence.Entity;
    import javax.validation.constraints.NotNull;
    import javax.validation.constraints.Size;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Email: antin502@gmail.com
     * Date: 13.02.2022
     * Time: 22:22
     */
    @Entity
    @Where(clause = GlobalVariables.WHERE_CLAUSE)
    @Getter
    @Setter
    @EqualsAndHashCode
    public class Role extends CoreModel {

        @NotNull
        @Column(unique = true)
        @Size(min = 4, max = 25) //ROLE...
        private String name;

    }`
  },
  {
    title: 'LoginUserDTO.java',
    text: `
    package com.github.vladimirantin.core.security.web.DTO;

    import lombok.Getter;
    import lombok.Setter;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Email: antin502@gmail.com
     * Date: 13.02.2022
     * Time: 22:22
     */
    @Getter
    @Setter
    public class LoginUserDTO {

        private String username;
        private String password;
    }`
  },
  {
    title: 'UserDTO.java',
    text: `
    package com.github.vladimirantin.core.security.web.DTO;

    import com.github.vladimirantin.core.web.DTO.CoreDTO;
    import lombok.Getter;
    import lombok.Setter;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Email: antin502@gmail.com
     * Date: 13.02.2022
     * Time: 22:22
     */
    @Getter
    @Setter
    public class UserDTO extends CoreDTO {

        private String username;
        private boolean active;
    }`
  },

];

