import {b} from "./spring-core.const";

export const examples = [
  {
    title: 'Example 1 (Without generator)', yourCode: [
      {
        title: 'CustomEntity.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.GlobalVariables;')}
      ${b('import com.github.vladimirantin.core.model.CoreModel;')}
      import javax.persistence.Entity;
      import org.hibernate.annotations.Where;

      @Entity
      ${b('@Where(clause = GlobalVariables.WHERE_CLAUSE)')}
      public class CustomEntity extends CoreModel {

        private String name;
        private String description;
        ...
      }`
      },
      {
        title: 'CustomRepository.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.repo.CoreRepository;')}
      import org.springframework.stereotype.Repository;

      @Repository
      public interface CustomRepository extends CoreRepository&lt;CustomEntity&gt; {
        ...
      }`
      },
      {
        title: 'CustomService.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.service.CoreModelService;')}
      import org.springframework.stereotype.Service;

      @Service
      public class CustomService extends CoreModelService&lt;CustomRepository, CustomEntity&gt; {
        ....
      }`
      },
      {
        title: 'CustomDTO.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.DTO.CoreDTO;')}

      public class CustomDTO extends CoreDTO {

          private String name;
          private String description;
          ...
      }`

      },
      {
        title: 'CustomMapper.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.mapper.CoreMapperImpl;')}
      import org.springframework.stereotype.Component;

      @Component
      public class CustomMapper extends CoreMapperImpl&lt;CustomDTO, CustomEntity&gt; {
          ...
      }`

      },
      {
        title: 'CustomController.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.rest.CoreRestController;')}
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api/customs")
      public class CustomController extends CoreRestController&lt;CustomService, CustomMapper, CustomDTO, CustomEntity&gt; {
          ...
      }`

      },

    ], generator: []
  },

  {
    title: 'Example 2 (Custom generator)', yourCode: [
      {
        title: 'CustomEntity.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.GlobalVariables;')}
      ${b('import com.github.vladimirantin.core.model.CoreModel;')}
      import javax.persistence.Entity;
      import org.hibernate.annotations.Where;
      ${b('import com.github.vladimirantin.core.reflection.CoreImpl;')}

      @Entity
      ${b('@Where(clause = GlobalVariables.WHERE_CLAUSE)')}
      ${b('@CoreImpl(DTO = CustomDTO.class, type = {CoreImpl.ImplType.REPO, CoreImpl.ImplType.SERVICE, CoreImpl.ImplType.MAPPER})')}
      public class CustomEntity extends CoreModel {

        private String name;
        private String description;
        ...
      }`
      },
      {
        title: 'CustomDTO.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.DTO.CoreDTO;')}

      public class CustomDTO extends CoreDTO {

          private String name;
          private String description;
          ...
      }`

      },
      {
        title: 'CustomController.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.rest.CoreRestController;')}
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api/customs")
      public class CustomController extends CoreRestController&lt;CustomService, CustomMapper, CustomDTO, CustomEntity&gt; {
          ...
      }`

      },

    ], generator: [
      {
        title: 'CustomRepo.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.repo.CoreRepository;')}
      import org.springframework.stereotype.Repository;

      @Repository
      public interface CustomRepo extends CoreRepository&lt;CustomEntity&gt; {
        ...
      }`
      },
      {
        title: 'CustomService.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.service.CoreModelService;')}
      import org.springframework.stereotype.Service;

      @Service
      public class CustomService extends CoreModelService&lt;CustomRepository, CustomEntity&gt; {
        ....
      }`
      },
      {
        title: 'CustomMapper.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.mapper.CoreMapperImpl;')}
      import org.springframework.stereotype.Component;

      @Component
      public class CustomMapper extends CoreMapperImpl&lt;CustomDTO, CustomEntity&gt; {
          ...
      }`

      },
    ]
  },

  {
    title: 'Example 3 (Full generator)', yourCode: [
      {
        title: 'CustomEntity.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.GlobalVariables;')}
      ${b('import com.github.vladimirantin.core.model.CoreModel;')}
      import javax.persistence.Entity;
      import org.hibernate.annotations.Where;
      ${b('import com.github.vladimirantin.core.reflection.CoreImpl;')}

      @Entity
      ${b('@Where(clause = GlobalVariables.WHERE_CLAUSE)')}
      ${b('@CoreImpl(DTO = CustomDTO.class)')} // or ${b('@CoreImpl(DTO = CustomDTO.class, type = CoreImpl.ImplType.ALL)')}
      public class CustomEntity extends CoreModel {

        private String name;
        private String description;
        ...
      }`
      },
      {
        title: 'CustomDTO.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.DTO.CoreDTO;')}

      public class CustomDTO extends CoreDTO {

          private String name;
          private String description;
          ...
      }`

      }

    ], generator: [
      {
        title: 'CustomRepo.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.repo.CoreRepository;')}
      import org.springframework.stereotype.Repository;

      @Repository
      public interface CustomRepo extends CoreRepository&lt;CustomEntity&gt; {
        ...
      }`
      },
      {
        title: 'CustomService.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.service.CoreModelService;')}
      import org.springframework.stereotype.Service;

      @Service
      public class CustomService extends CoreModelService&lt;CustomRepository, CustomEntity&gt; {
        ....
      }`
      },
      {
        title: 'CustomMapper.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.mapper.CoreMapperImpl;')}
      import org.springframework.stereotype.Component;

      @Component
      public class CustomMapper extends CoreMapperImpl&lt;CustomDTO, CustomEntity&gt; {
          ...
      }`

      },
      {
        title: 'CustomController.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.rest.CoreRestController;')}
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      ${b('@RequestMapping("/api/entity_customs")')}
      public class CustomController extends CoreRestController&lt;CustomService, CustomMapper, CustomDTO, CustomEntity&gt; {
          ...
      }`

      },
    ]
  }

];

export const docs = [
  {
    title: 'CoreModel.java',
    text: `
    import com.github.vladimirantin.core.reflection.Invoker;
    import lombok.EqualsAndHashCode;
    import lombok.Getter;
    import lombok.Setter;

    import javax.persistence.*;
    import javax.validation.constraints.NotNull;
    import java.time.LocalDateTime;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Date: 09.06.2019
     * Time: 17:22
     */
    @MappedSuperclass
    @Getter
    @Setter
    @EqualsAndHashCode
    public class CoreModel implements Invoker {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;

        @Column(updatable = false, columnDefinition = "Datetime not null default now()", nullable = false)
        private LocalDateTime createdOn;

        @Column(columnDefinition = "Datetime default now()", nullable = false)
        private LocalDateTime updateOn;

        @Version
        private int version;

        @NotNull
        @Column(columnDefinition = "Bit default 0")
        private boolean deleted = false;


        @PrePersist
        protected void onCreate() {
            this.createdOn = LocalDateTime.now();
            this.updateOn = LocalDateTime.now();
        }

        @PreUpdate
        protected void onUpdate() {
            this.updateOn = LocalDateTime.now();
        }

    }`
  },
  {
    title: 'CoreCodeModel.java',
    text: `
    package com.github.vladimirantin.core.model;

    import com.github.vladimirantin.core.reflection.Invoker;
    import lombok.EqualsAndHashCode;
    import lombok.Getter;
    import lombok.Setter;

    import javax.persistence.MappedSuperclass;
    import javax.validation.constraints.NotNull;
    import javax.validation.constraints.Size;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Date: 05.07.2020
     * Time: 18:30
     */
    @MappedSuperclass
    @Getter
    @Setter
    @EqualsAndHashCode
    public class CodeCoreModel extends CoreModel implements Invoker {

        @NotNull
        @Size(min = 3, max = 50)
        private String code;

        @NotNull
        @Size(min = 3, max = 255)
        private String name;

    }`
  },
  {
    title: 'CoreRepository.java',
    text: `
    package com.github.vladimirantin.core.repo;

    import com.github.vladimirantin.core.model.CoreModel;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.data.jpa.repository.Modifying;
    import org.springframework.data.jpa.repository.Query;
    import org.springframework.data.repository.NoRepositoryBean;
    import org.springframework.data.repository.query.Param;
    import org.springframework.transaction.annotation.Transactional;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Date: 15.11.2019
     * Time: 17:17
     */
    @NoRepositoryBean
    public interface CoreRepository&lt;T extends CoreModel&gt; extends JpaRepository&lt;T, Long&gt; {

      @Override
      @Query("update #{#entityName} e set e.deleted=true where e.id = :id")
      @Transactional
      @Modifying
      void deleteById(@Param("id") Long id);

      @Override
      @Transactional
      default void delete(T entity) {
          deleteById(entity.getId());
      }

      @Override
      @Transactional
      default void deleteAll(Iterable<? extends T> entities) {
          entities.forEach(entitiy -> delete(entitiy));
      }

      @Override
      @Transactional
      default void deleteInBatch(Iterable<T> iterable) {
          iterable.forEach(entitiy -> delete(entitiy));
      }

      @Override
      default void deleteAllInBatch() {
          deleteAll();
      };

      @Override
      @Query("update #{#entityName} e set e.deleted=true")
      @Transactional
      @Modifying
      void deleteAll();

    }`
  },
  {
    title: 'CoreModelService.java',
    text: `
    package com.github.vladimirantin.core.service;

    import com.github.vladimirantin.core.model.CoreModel;
    import org.slf4j.Logger;
    import org.slf4j.LoggerFactory;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.data.domain.Page;
    import org.springframework.data.domain.Pageable;
    import org.springframework.data.jpa.repository.JpaRepository;

    import javax.persistence.EntityNotFoundException;
    import java.lang.reflect.ParameterizedType;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Date: 10.06.2019
     * Time: 17:26

     * Abstraction for Spring service
     * @param &lt;R&gt; - Repository type
     * @param &lt;E&gt; - Entity type
     */
    public abstract class CoreModelService&lt;R extends JpaRepository&gt;E, Long&lt;,E extends CoreModel&gt; {

      /**
       * Logger for SubClass
       */
      Logger log = LoggerFactory.getLogger(this.getClass());


      /**
       * Inject repository
       */
      @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
      @Autowired
      protected R repo;

      /**
       * Find all for object type
       * @param pageable - Parameters for pagination
       * @return - One page of type E
       */
      public Page&lt;E&gt; findAll(Pageable pageable) {
          log.info("Find all (entity: {}, repo: {})", getEntityName(), getRepoName());
          return repo.findAll(pageable);
      }


      /**
       * Find one by id
       * @param id - Object id
       * @return - One object of type E
       */
      public E findOne(long id){
          log.info("Find one by id: {} (entity: {}, repo: {})", id, getEntityName(), getRepoName());
          return repo.findById(id).orElseThrow(() -&gt; new EntityNotFoundException());
      }

      /**
       * Create or Update object
       * @param entity - Object to save
       * @return - Saved object
       */
      public E save(E entity){
          log.info("Save one (entity: {}, repo: {})", getEntityName(), getRepoName());
          return repo.save(entity);
      }

      /**
       * Delete one object
       * @param entity - Entity to delete
       */
      public void delete(E entity) {
          log.info("Delete one by id: {} (entity: {}, repo: {})", entity.getId(), getEntityName(), getRepoName());
          repo.delete(entity);
      }

    }`
  },
  {
    title: 'CoreDTO.java',
    text: `
    package com.github.vladimirantin.core.web.DTO;

    import com.fasterxml.jackson.annotation.JsonInclude;
    import com.github.vladimirantin.core.reflection.Invoker;
    import lombok.Getter;
    import lombok.Setter;
    import lombok.ToString;
    import lombok.experimental.Accessors;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Date: 09.06.2019
     * Time: 17:22
     */
    @Getter
    @Setter
    @ToString(includeFieldNames = false)
    @Accessors(chain = true)
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    public class CoreDTO implements Invoker {
        private long id;
        private int version;
    }`
  },
  {
    title: 'CoreMapperImpl.java',
    text: `
    package com.github.vladimirantin.core.web.mapper;

    import com.github.vladimirantin.core.model.CoreModel;
    import com.github.vladimirantin.core.web.DTO.CoreDTO;
    import com.google.common.reflect.TypeToken;
    import org.modelmapper.ModelMapper;

    import java.lang.reflect.Type;
    import java.util.Collection;
    import java.util.List;
    import java.util.stream.Collectors;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Date: 27.02.2020
     * Time: 22:29
     */
    public abstract class CoreMapperImpl&lt;D extends CoreDTO, E extends CoreModel&gt; {

        private ModelMapper modelMapper = new ModelMapper();

        public E toEntity(D dto) {
            if(dto == null) {
                return null;
            }
            return modelMapper.map(dto, (Type) getEntityType());
        }

        public D toDto(E entity) {
            if(entity == null) {
                return null;
            }
            return modelMapper.map(entity, (Type) getDTOType());
        }

        public List&lt;E&gt; toEntity(Collection&lt;D&gt; dtoList) {
            return dtoList.stream().map(this::toEntity).collect(Collectors.toList());
        }

        public List&lt;D&gt; toDto(Collection&lt;E&gt; entityList) {
            return entityList.stream().map(this::toDto).collect(Collectors.toList());
        }

        public List&lt;D&gt; toMinimalDTO(Collection&lt;E&gt; entityList) {
            return entityList.stream().map(this::toMinimalDTO).collect(Collectors.toList());
        }

        public D toMinimalDTO(E entity) {
            if(entity == null) {
                return null;
            }
            return modelMapper.map(entity, (Type) getDTOType());
        }

    }`
  },
  {
    title: 'CoreRestController.java',
    text: `
    package com.github.vladimirantin.core.web.rest;

    import com.github.vladimirantin.core.model.CoreModel;
    import com.github.vladimirantin.core.service.CoreModelService;
    import com.github.vladimirantin.core.web.DTO.CoreDTO;
    import com.github.vladimirantin.core.web.mapper.CoreMapperImpl;
    import com.github.vladimirantin.core.web.utils.HttpParams;
    import com.github.vladimirantin.core.web.utils.PaginationUtil;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.data.domain.Page;
    import org.springframework.data.domain.Pageable;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.lang.reflect.InvocationTargetException;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Date: 10.06.2019
     * Time: 19:09
     *
     * Abstraction for Spring boot REST controller
     * @param &lt;SERVICE&gt; - Service
     * @param &lt;MAPPER&gt; - Mapper
     * @param &lt;DTO&gt; - Data Transfer Object
     * @param &lt;ENTITY&gt; - Entity
     */
    public abstract class CoreRestController&lt;SERVICE extends CoreModelService, MAPPER extends CoreMapperImpl,DTO extends CoreDTO, ENTITY extends CoreModel&gt; {

        /**
         * Inject service
         */
        @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
        @Autowired
        protected SERVICE service;

        /**
         * Inject mapper
         */
        @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
        @Autowired
        protected MAPPER mapper;

        /**
         * Find All entities for type ENTITY
         * @param pageable - pagerequest
         * @param params - Parameters for pagination and default params
         * @return - One page of type DTO
         */
        @SuppressWarnings("unchecked")
        @GetMapping
        public ResponseEntity&lt;?&gt; findAll(Pageable pageable, HttpParams params) {
            Page&lt;ENTITY&gt; entities = service.findAll(pageable);
            if (params.getBody()== HttpParams.BodyType.array) {
                return ResponseEntity
                        .ok()
                        .headers(PaginationUtil.generatePaginationHttpHeaders(entities))
                        .body(mapper.toMinimalDTO(entities.getContent()));
            } else {
                return ResponseEntity
                        .ok()
                        .headers(PaginationUtil.generatePaginationHttpHeaders(entities))
                        .body(PaginationUtil.generateBody(mapper.toMinimalDTO(entities.getContent()),entities));
            }
        }

        /**
         * Find one entity for type ENTITY
         * @param id - id of ENTITY
         * @return - Found DTO
         */
        @SuppressWarnings("unchecked")
        @GetMapping("/{id}")
        public ResponseEntity findOne(@PathVariable long id) {
            return ResponseEntity.ok(mapper.toDto(service.findOne(id)));
        }

        /**
         * Create one object of type ENTITY
         * @param dto - Object from request
         * @return - Created object (DTO)
         */
        @SuppressWarnings("unchecked")
        @PostMapping
        public ResponseEntity create(@RequestBody DTO dto) {
            if(dto.getId()!=0){
                return ResponseEntity.badRequest().build();
            }
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(mapper.toDto(service.save(mapper.toEntity(dto))));
        }

        /**
         * Update one object of type ENTITY
         * @param id - id of ENTITY
         * @param dto - Object from request
         * @return - Updated object (DTO)
         */
        @SuppressWarnings("unchecked")
        @PutMapping("/{id}")
        public ResponseEntity update(@PathVariable long id, @RequestBody DTO dto) {
            if(id!=dto.getId()){
                return ResponseEntity.badRequest().build();
            }
            ENTITY entity = (ENTITY) service.save(mapper.toEntity(dto));
            return ResponseEntity.ok(mapper.toDto(entity));
        }

        @SuppressWarnings("unchecked")
        @PatchMapping("/{id}/{propertyName}")
        public ResponseEntity patch(@PathVariable long id, @PathVariable String propertyName, @RequestBody DTO dto) throws InvocationTargetException, IllegalAccessException {
            ENTITY entity = (ENTITY) service.findOne(id);
            entity.setReflectValue(propertyName, dto.getReflectValue(propertyName));
            entity = (ENTITY) service.save(entity);
            return ResponseEntity.ok(mapper.toDto(entity));
        }

        /**
         * Delete ENTITY by id
         * @param id - Id of ENTITY
         * @return - Status code if everything is ok
         */
        @DeleteMapping("/{id}")
        public ResponseEntity deleteOne(@PathVariable long id) {
            ENTITY entity = (ENTITY) service.findOne(id);
            service.delete(entity);
            return ResponseEntity.noContent().build();
        }

    }`
  },
  {
    title: 'HttpParams.java',
    text: `
    package com.github.vladimirantin.core.web.utils;

    import lombok.Getter;
    import lombok.Setter;

    /**
     * Created by IntelliJ IDEA
     * User: vladimir_antin
     * Date: 27.11.2019
     * Time: 20:49
     */
    @Getter
    @Setter
    public class HttpParams {
        public enum BodyType {page, array}

        private BodyType body = BodyType.page;

    }`
  },
];
