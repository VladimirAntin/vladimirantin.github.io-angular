import {b} from "./spring-core.const";

export const examples = [
  {
    title: 'Example 1 (Soft delete events)', yourCode: [
      {
        title: 'MainApplication.java',
        text: `
        ...
        ${b('import com.github.vladimirantin.core.annotation.EnableSoftDeleteEvents;')}
        import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;

        @SpringBootApplication
        ${b('@EnableSoftDeleteEvents')}
        public class MainApplication {

            public static void main(String[] args) throws Exception {
                SpringApplication.run(MainApplication.class, args);
            }

        }`
      },
      {
        title: 'CustomAuditInterceptorImpl.java',
        text: `
        ...
        ${b('import com.github.vladimirantin.core.audit.AuditInterceptor;')}
        import org.springframework.security.core.context.SecurityContextHolder;
        import org.springframework.stereotype.Component;

        @Component
        public class CustomAuditInterceptorImpl extends AuditInterceptor {

            @Override
            public void onPostInsert(PostInsertEvent event) {
                ....
            }

            @Override
            public void onPostUpdate(PostUpdateEvent event) {
                ....
            }

            @Override
            public void onPostSoftDelete(PostSoftDeleteEvent event) {
                ....
            }
        }`
      },
      {
        title: 'CustomAuditLog.java',
        text: `
        ...
        ${b('import com.github.vladimirantin.core.model.CoreModel;')}
        ${b('import com.github.vladimirantin.core.reflection.CoreImpl;')}

        import javax.persistence.Entity;

        @Entity
        @CoreImpl(DTO = CustomAuditLogDTO.class)
        public class CustomAuditLog extends CoreModel {
            .... // your properties
        }`
      },
      {
        title: 'CustomAuditLogDTO.java',
        text: `
        ...
        ${b('import com.github.vladimirantin.core.web.DTO.CoreDTO;')}

        public class CustomAuditLogDTO extends CoreDTO {
            .... // your properties
        }`
      }
    ]
  },
  {
    title: 'Example 2 (Existing AuditLog)', yourCode: [
      {
        title: 'MainApplication.java',
        text: `
        ...
        ${b('import com.github.vladimirantin.core.annotation.EnableAudit;')}
        import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;

        @SpringBootApplication
        ${b('@EnableAudit')}
        public class MainApplication {

            public static void main(String[] args) throws Exception {
                SpringApplication.run(MainApplication.class, args);
            }

        }`
      }
    ]
  },
];

export const docs = [
  {
    title: 'AuditLog.java',
    text: `
      package com.github.vladimirantin.core.audit;

      import com.fasterxml.jackson.databind.ObjectMapper;
      import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
      import com.github.vladimirantin.core.model.CoreModel;
      import com.github.vladimirantin.core.softDelete.event.one.PostSoftDeleteEvent;
      import lombok.Getter;
      import lombok.Setter;
      import lombok.ToString;
      import org.hibernate.event.spi.PostInsertEvent;
      import org.hibernate.event.spi.PostUpdateEvent;

      import javax.persistence.Column;
      import javax.persistence.Entity;
      import javax.persistence.EnumType;
      import javax.persistence.Enumerated;
      import java.util.ArrayList;
      import java.util.List;

      /**
       * Created by IntelliJ IDEA
       * User: vladimir_antin
       * Email: antin502@gmail.com
       * Date: 16.10.2020
       * Time: 21:57
       * https://github.com/FasterXML/jackson-datatype-hibernate/issues/87
       */
      @Entity(name = "audit_log")
      @Getter
      @Setter
      @ToString
      public class AuditLog extends CoreModel {

          private String entityType;
          private String entityName;
          @Enumerated(EnumType.STRING)
          private AuditLogAction action;

          @Column(length = 16777215, columnDefinition = "mediumtext")
          private String currentState;
          @Column(length = 16777215, columnDefinition = "mediumtext")
          private String previousState;

          private Long entityId;
          private String username;


          public static AuditLog INSERT(PostInsertEvent event, String username) {
              if (event.getEntity().getClass().getCanonicalName().equals(AuditLog.class.getCanonicalName())) {
                  return null;
              }
              ObjectMapper objectMapper = new ObjectMapper();
              objectMapper.registerModule(new Hibernate5Module());
              CoreModel model = (CoreModel) event.getEntity();
              AuditLog auditLog = createChangeEntityFromCoreModel(model, username);
              auditLog.setAction(AuditLogAction.INSERT);
              auditLog.setPreviousState("{}");
              try {
                  auditLog.setCurrentState(objectMapper.writeValueAsString(model));
              } catch (Exception e) {
                  auditLog.setCurrentState("{}");
              }
              return auditLog;
          }

          public static AuditLog UPDATE(PostUpdateEvent event, String username) {
              if (event.getEntity().getClass().getCanonicalName().equals(AuditLog.class.getCanonicalName())) {
                  return null;
              }
              AuditLog auditLog = createChangeEntityFromCoreModel((CoreModel) event.getEntity(), username);
              auditLog.setAction(AuditLogAction.UPDATE);
              List&lt;String&gt; previous = new ArrayList&lt;&gt;();
              List&lt;String&gt; current = new ArrayList&lt;&gt;();

              for (int i : event.getDirtyProperties()) {
                  String propertyName = event.getPersister().getPropertyNames()[i];
                  Object oldValue = event.getOldState()[i];
                  Object currentValue = event.getState()[i];
                  previous.add(String.format("%s: %s", propertyName, oldValue));
                  current.add(String.format("%s: %s", propertyName, currentValue));
              }
              auditLog.setPreviousState(String.format("{%s}", String.join(", ", previous)));
              auditLog.setCurrentState(String.format("{%s}", String.join(", ", current)));
              return auditLog;
          }

          public static AuditLog DELETE(PostSoftDeleteEvent event, String username) {
              if (event.getEntity().getClass().getCanonicalName().equals(AuditLog.class.getCanonicalName())) {
                  return null;
              }
              AuditLog auditLog = createChangeEntityFromCoreModel((CoreModel) event.getEntity(), username);
              auditLog.setAction(AuditLogAction.DELETE);
              auditLog.setPreviousState("{}");
              auditLog.setCurrentState("{}");
              return auditLog;
          }

          protected static AuditLog createChangeEntityFromCoreModel(CoreModel model, String username) {
              AuditLog auditLog = new AuditLog();
              auditLog.setUsername(username);
              auditLog.setEntityName(model.getClass().getName());
              auditLog.setEntityType(model.getClass().getCanonicalName());
              auditLog.setEntityId(model.getId());
              return auditLog;
          }
      }`
  },
  {
    title: 'AuditLogAction.java',
    text: `
      package com.github.vladimirantin.core.audit;

      /**
       * Created by IntelliJ IDEA
       * User: vladimir_antin
       * Email: antin502@gmail.com
       * Date: 19.10.2020
       * Time: 01:55
       */
      public enum  AuditLogAction {
          INSERT, UPDATE, DELETE
      }`
  },
  {
    title: 'AuditLogDTO.java',
    text: `
      package com.github.vladimirantin.core.audit;

      import com.github.vladimirantin.core.web.DTO.CoreDTO;
      import lombok.Getter;
      import lombok.Setter;

      /**
       * Created by IntelliJ IDEA
       * User: vladimir_antin
       * Email: antin502@gmail.com
       * Date: 16.10.2020
       * Time: 21:57
       */
      @Getter
      @Setter
      public class AuditLogDTO extends CoreDTO {

          private String action;
          private String currentState;
          private String previousState;
          private Long entityId;
          private String entityName;
          private String username;
      }`
  },
  {
    title: 'AuditInterceptor.java',
    text: `
      package com.github.vladimirantin.core.audit;

      import com.github.vladimirantin.core.audit.impl.AuditLogService;
      import com.github.vladimirantin.core.softDelete.event.SoftDeleteEvent;
      import com.github.vladimirantin.core.softDelete.event.SoftDeleteListener;
      import com.github.vladimirantin.core.softDelete.event.collection.PostSoftDeleteCollectionEvent;
      import com.github.vladimirantin.core.softDelete.event.collection.PreSoftDeleteCollectionEvent;
      import com.github.vladimirantin.core.softDelete.event.one.PreSoftDeleteEvent;
      import org.hibernate.event.service.spi.EventListenerRegistry;
      import org.hibernate.event.spi.EventType;
      import org.hibernate.event.spi.PostInsertEventListener;
      import org.hibernate.event.spi.PostUpdateEventListener;
      import org.hibernate.internal.SessionFactoryImpl;
      import org.hibernate.persister.entity.EntityPersister;
      import org.springframework.beans.factory.annotation.Autowired;

      import javax.annotation.PostConstruct;
      import javax.persistence.EntityManagerFactory;
      import javax.persistence.PersistenceUnit;

      /**
       * Created by IntelliJ IDEA
       * User: vladimir_antin
       * Email: antin502@gmail.com
       * Date: 16.10.2020
       * Time: 23:37
       */
      public abstract class AuditInterceptor implements PostInsertEventListener, PostUpdateEventListener, SoftDeleteListener {

          @PersistenceUnit
          private EntityManagerFactory emf;  // NOTE Can't autowire SessionFactory.

          @Autowired
          protected AuditLogService auditLogService;

          @Override
          public final void onApplicationEvent(SoftDeleteEvent event) {
              if (event instanceof PreSoftDeleteEvent) {
                  onPreSoftDelete((PreSoftDeleteEvent) event);
              }
          }

          @PostConstruct
          public final void registerListeners() {
              SessionFactoryImpl sessionFactory = emf.unwrap(SessionFactoryImpl.class);
              EventListenerRegistry registry = ((SessionFactoryImpl) sessionFactory)
                      .getServiceRegistry().getService(EventListenerRegistry.class);
              registry.appendListeners(EventType.POST_INSERT, this);
              registry.appendListeners(EventType.POST_UPDATE, this);
          }

          @Override
          public final void onPreSoftDelete(PreSoftDeleteEvent event) { }

          @Override
          public final void onPreSoftDeleteCollectionEvent(PreSoftDeleteCollectionEvent event) { }

          @Override
          public final void onPostSoftDeleteCollectionEvent(PostSoftDeleteCollectionEvent event) { }

          @Override
          public final boolean requiresPostCommitHandling(EntityPersister persister) {
              return false;
          }

          @Override
          public final boolean requiresPostCommitHanding(EntityPersister persister) {
              return false;
          }
      }`
  },
  {
    title: 'AbstractRepository.java',
    text: `
      package com.github.vladimirantin.core.audit;

      import com.github.vladimirantin.core.model.CoreModel;
      import com.github.vladimirantin.core.repo.CoreRepository;
      import org.springframework.data.domain.Example;
      import org.springframework.data.domain.Page;
      import org.springframework.data.domain.Pageable;
      import org.springframework.data.domain.Sort;

      import java.util.List;
      import java.util.Optional;

      /**
       * Created by IntelliJ IDEA
       * User: vladimir_antin
       * Email: antin502@gmail.com
       * Date: 19.10.2020
       * Time: 17:34
       */
      public abstract class AbstractRepository&lt;T extends CoreModel&gt; implements CoreRepository&lt;T&gt; {
          @Override
          public void deleteById(Long id) { }

          @Override
          public void deleteAll() {}

          @Override
          public List&lt;T&gt; findAll() {
              return null;
          }

          @Override
          public List&lt;T&gt; findAll(Sort sort) {
              return null;
          }

          @Override
          public List&lt;T&gt; findAllById(Iterable&lt;Long&gt; longs) {
              return null;
          }

          @Override
          public &lt;S extends T&gt; List&lt;S&gt; saveAll(Iterable&lt;S&gt; entities) {
              return null;
          }

          @Override
          public void flush() { }

          @Override
          public &lt;S extends T&gt; S saveAndFlush(S entity) {
              return null;
          }

          @Override
          public T getOne(Long aLong) {
              return null;
          }

          @Override
          public &lt;S extends T&gt; List&lt;S&gt; findAll(Example&lt;S&gt; example) {
              return null;
          }

          @Override
          public &lt;S extends T&gt; List&lt;S&gt; findAll(Example&lt;S&gt; example, Sort sort) {
              return null;
          }

          @Override
          public Page&lt;T&gt; findAll(Pageable pageable) {
              return null;
          }

          @Override
          public &lt;S extends T&gt; S save(S entity) {
              return null;
          }

          @Override
          public Optional&lt;T&gt; findById(Long aLong) {
              return Optional.empty();
          }

          @Override
          public boolean existsById(Long aLong) {
              return false;
          }

          @Override
          public long count() {
              return 0;
          }

          @Override
          public &lt;S extends T&gt; Optional&lt;S&gt; findOne(Example&lt;S&gt; example) {
              return Optional.empty();
          }

          @Override
          public &lt;S extends T&gt; Page&lt;S&gt; findAll(Example&lt;S&gt; example, Pageable pageable) {
              return null;
          }

          @Override
          public &lt;S extends T&gt; long count(Example&lt;S&gt; example) {
              return 0;
          }

          @Override
          public &lt;S extends T&gt; boolean exists(Example&lt;S&gt; example) {
              return false;
          }
      }`
  },
  {
    title: 'AuditInterceptorImpl.java',
    text: `
      package com.github.vladimirantin.core.audit.impl;

      import com.github.vladimirantin.core.audit.AuditInterceptor;
      import com.github.vladimirantin.core.audit.AuditLog;
      import com.github.vladimirantin.core.softDelete.event.one.PostSoftDeleteEvent;
      import org.hibernate.event.spi.PostInsertEvent;
      import org.hibernate.event.spi.PostUpdateEvent;
      import org.springframework.security.core.context.SecurityContextHolder;
      import org.springframework.stereotype.Component;

      /**
       * Created by IntelliJ IDEA
       * User: vladimir_antin
       * Email: antin502@gmail.com
       * Date: 19.10.2020
       * Time: 02:02
       */
      @Component
      public class AuditInterceptorImpl extends AuditInterceptor {

          @Override
          public void onPostInsert(PostInsertEvent event) {
              AuditLog ce = AuditLog.INSERT(event, loggedInUsername());
              if (ce!=null) {
                  auditLogService.save(ce);
              }
          }

          @Override
          public void onPostUpdate(PostUpdateEvent event) {
              AuditLog ce = AuditLog.UPDATE(event, loggedInUsername());
              if (ce!=null) {
                  auditLogService.save(ce);
              }
          }

          @Override
          public void onPostSoftDelete(PostSoftDeleteEvent event) {
              AuditLog ce = AuditLog.DELETE(event, loggedInUsername());
              if (ce!=null) {
                  auditLogService.save(ce);
              }
          }

          protected String loggedInUsername() {
              String defaultUsername = "Application";
              try {
                  defaultUsername = SecurityContextHolder.getContext().getAuthentication().getName();
              } catch (Exception e){}
              return defaultUsername;
          }
      }`
  },
  {
    title: 'AuditLogRepo.java',
    text: `
      package com.github.vladimirantin.core.audit.impl;

      import com.github.vladimirantin.core.audit.AbstractRepository;
      import com.github.vladimirantin.core.audit.AuditLog;
      import org.springframework.data.domain.Page;
      import org.springframework.data.domain.PageImpl;
      import org.springframework.data.domain.Pageable;
      import org.springframework.stereotype.Component;

      import javax.persistence.EntityManager;
      import javax.persistence.PersistenceContext;
      import javax.persistence.PersistenceContextType;
      import javax.persistence.Query;
      import java.math.BigInteger;
      import java.util.List;
      import java.util.Optional;

      @Component
      public class AuditLogRepo extends AbstractRepository&lt;AuditLog&gt; {

          @PersistenceContext(type = PersistenceContextType.TRANSACTION)
          private EntityManager em;

          @Override
          public Page&lt;AuditLog&gt; findAll(Pageable pageable) {
              Query findAllQuery = em.createNativeQuery("select al.* from audit_log al", AuditLog.class);
              findAllQuery.setFirstResult(pageable.getPageNumber() * pageable.getPageSize());
              findAllQuery.setMaxResults(pageable.getPageSize());
              List&lt;AuditLog&gt; resultList = findAllQuery.getResultList();
              return new PageImpl(resultList, pageable, count());
          }

          @Override
          public AuditLog save(AuditLog entity) {
              em.persist(entity);
              return entity;
          }

          @Override
          public Optional&lt;AuditLog&gt; findById(Long id) {
              return Optional.of(em.find(AuditLog.class, id));
          }

          @Override
          public long count() {
              Query countQuery = em.createNativeQuery("select count(al.id) from audit_log al");
              BigInteger count = (BigInteger) countQuery.getSingleResult();
              return count.longValue();
          }
      }`
  },
  {
    title: 'AuditLogService.java',
    text:`
      package com.github.vladimirantin.core.audit.impl;

      import com.github.vladimirantin.core.audit.AuditLog;
      import com.github.vladimirantin.core.service.CoreModelService;
      import org.springframework.stereotype.Service;

      @Service
      public class AuditLogService extends CoreModelService&lt;AuditLogRepo, AuditLog&gt; {
      }`
  },
  {
    title: 'AuditLogMapper.java',
    text:`
      package com.github.vladimirantin.core.audit.impl;

      import com.github.vladimirantin.core.audit.AuditLog;
      import com.github.vladimirantin.core.audit.AuditLogDTO;
      import com.github.vladimirantin.core.web.mapper.CoreMapperImpl;
      import org.springframework.stereotype.Component;

      @Component
      public class AuditLogMapper extends CoreMapperImpl&lt;AuditLogDTO, AuditLog&gt; {}`
  },
  {
    title: 'AuditLogController.java',
    text:`
      package com.github.vladimirantin.core.audit.impl;

      import com.github.vladimirantin.core.audit.AuditLog;
      import com.github.vladimirantin.core.audit.AuditLogDTO;
      import com.github.vladimirantin.core.web.rest.CoreRestController;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api/audit_logs")
      public class AuditLogController extends CoreRestController&lt;AuditLogService, AuditLogMapper, AuditLogDTO, AuditLog&gt; {
      }`
  },
  {
    title: 'AuditConfiguration.java',
    text: `
      package com.github.vladimirantin.core.audit;

      import com.github.vladimirantin.core.audit.impl.*;
      import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
      import org.springframework.context.annotation.Configuration;
      import org.springframework.context.annotation.Import;


      /**
       * Created by IntelliJ IDEA
       * User: vladimir_antin
       * Email: antin502@gmail.com
       * Date: 19.10.2020
       * Time: 12:35
       */
      @Configuration
      @Import({AuditInterceptorImpl.class, AuditLog.class, AuditLogRepo.class,
               AuditLogService.class, AuditLogMapper.class, AuditLogController.class})
      @AutoConfigurationPackage
      public class AuditConfiguration { }`
  }
];
