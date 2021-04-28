import {b} from "./spring-core.const";

export const examples = [
  {
    title: 'Example 1 (Without generator)', yourCode: [
      {
        title: 'CustomExtendedController.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.rest.ExtendedRestController;')}
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api/customs")
      public class CustomExtendedController extends ExtendedRestController&lt;CustomService, CustomMapper, CustomDTO, CustomEntity&gt; {
          ...
      }`

      },

    ], generator: []
  },

  {
    title: 'Example 2 (Standard generator)', yourCode: [
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
      ${b('@CoreImpl(DTO = CustomDTO.class)')} // or ${b('@CoreImpl(DTO = CustomDTO.class, type = CoreImpl.ImplType.STANDARD)')}
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
  },
  {
    title: 'Example 3 (Extended generator)', yourCode: [
      {
        title: 'CustomExtendedEntity.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.GlobalVariables;')}
      ${b('import com.github.vladimirantin.core.model.CoreModel;')}
      import javax.persistence.Entity;
      import org.hibernate.annotations.Where;
      ${b('import com.github.vladimirantin.core.reflection.CoreImpl;')}

      @Entity
      ${b('@Where(clause = GlobalVariables.WHERE_CLAUSE)')}
      ${b('@CoreImpl(DTO = CustomDTO.class, type = CoreImpl.ImplType.EXTENDED)')}}
      public class CustomExtendedEntity extends CoreModel {

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

      public class CustomExtendedDTO extends CoreDTO {

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
        title: 'CustomExtendedController.java',
        text: `
      ...
      ${b('import com.github.vladimirantin.core.web.rest.ExtendedRestController;')}
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      ${b('@RequestMapping("/api/entity_customs")')}
      public class CustomExtendedController extends ExtendedRestController&lt;CustomService, CustomMapper, CustomDTO, CustomEntity&gt; {
          ...
      }`

      },
    ]
  }

];

export const docs = [
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
    title: 'ExtendedRestController.java',
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
    public abstract class ExtendedRestController&lt;SERVICE extends CoreModelService, MAPPER extends CoreMapperImpl,DTO extends CoreDTO, ENTITY extends CoreModel&gt;
    extends CoreRestController&lt;SERVICE, MAPPER, DTO, ENTITY&gt{{

        @SuppressWarnings("unchecked")
        @PatchMapping("/{id}/{propertyName}")
        public ResponseEntity patch(@PathVariable long id, @PathVariable String propertyName, @RequestBody DTO dto) throws InvocationTargetException, IllegalAccessException {
            ENTITY entity = (ENTITY) service.findOne(id);
            entity.setReflectValue(propertyName, dto.getReflectValue(propertyName));
            entity = (ENTITY) service.save(entity);
            return ResponseEntity.ok(mapper.toDto(entity));
        }


    }`
  },

];
