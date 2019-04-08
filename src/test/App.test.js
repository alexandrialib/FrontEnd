import mockAxios from "axios";
import {getAllCategories,getCategoryByName,getArticleFromCategory} from '../js/DataProvider'

it("bring categories", async () => {


  // work
  const categories = await getAllCategories("categories");

  // expect
  expect(categories[0].name).toEqual("Sort");
  expect(categories[1].name).toEqual('Graph theory');
  expect(categories[2].name).toEqual('Data structures');
}
  
  
  );

it("Fetch category  Sort", async () => {


  // work
  const categories = await getCategoryByName("Sort");
  
  expect(categories.name).toEqual("Sort");
  expect(categories.articles).toEqual([ { title: 'Quick',
  content:
   'duis oporteat percipit elementum malorum ultricies pharetra vivendo prompta gloriatur postea curabitur vocibus agam definitiones mel sagittis sagittis platea labores has his velit alia congue montes vidisse vivendo impetus viris has utinam veniam faucibus utinam repudiare perpetua commune quot massa maecenas dolorum adipiscing dignissim delenit tincidunt deseruisse dui deserunt sed utamur voluptatum liber nec invenire convallis habeo a causae lectus causae ea delectus unum menandri pro doctus eam dolore elitr ceteros tamquam ipsum posidonium justo vehicula ex luptatum verterem finibus moderatius imperdiet mucius dictum taciti quas condimentum mauris mnesarchum has ignota mucius quis idque suspendisse enim noluisse appareat recteque viderer atqui reformidans nobis detracto porta vituperata conceptam delicata at mentitum disputationi solum posse unum ancillae a vivendo dicant suspendisse omittam appetere dolorem ludus iusto conceptam platea pellentesque dolores aliquid sociosqu fabellas ei voluptaria ei lacinia vehicula maecenas erroribus cu has maximus facilis molestiae cetero inimicus falli quaerendum ultricies erroribus persius dolorum voluptatum eu iudicabit persequeris persequeris interesset viderer singulis prodesset elit primis nobis aliquid discere singulis potenti aliquip nihil oporteat convenire taciti fusce tale cetero decore neglegentur tempus pellentesque doming praesent delicata signiferumque fuisset adhuc interdum affert esse oratio pellentesque lectus veritus consectetur sociosqu pellentesque menandri dolorem legimus melius fabellas' },
{ title: 'Selection',
  content:
   'libris alterum condimentum putent euripidis omittantur dapibus evertitur vero assueverit splendide pericula vituperatoribus bibendum suavitate pretium definitionem dolores finibus dictum mauris sanctus sale expetendis ludus eos suscipit unum nihil senectus mediocritatem vestibulum quem pro ceteros aliquam consetetur pertinax sententiae mediocritatem audire et tristique veritus fabulas tristique tristique maiorum mei ponderum accumsan eius nonumy gubergren netus accumsan ferri blandit imperdiet ferri malesuada regione evertitur feugait senectus primis detracto aptent leo ridens pertinax malesuada eius lacus vero oporteat latine alterum commune suavitate consectetuer pri postea sagittis constituto fabulas feugait ius maecenas vitae noster tacimates ei interesset mutat nostrum unum voluptatum liber arcu mus libero volutpat volumus posse mentitum singulis a porttitor purus sea persequeris malorum his veniam adhuc maluisset ut duis proin option venenatis dapibus graece lacus commune lacinia usu pretium doming risus ferri maiestatis adipiscing fringilla delenit voluptatum comprehensam ignota volutpat theophrastus suscipiantur reprimique duo dolorum auctor fringilla conubia sapien lacus fabellas pellentesque sed dictas deserunt esse movet reprimique semper velit suscipit habitant diam integer reque massa taciti dapibus tortor donec iaculis libero expetenda morbi magnis agam ad mus nominavi justo alia pellentesque posse inceptos sonet iriure in pro voluptatibus erroribus contentiones euismod periculis etiam adhuc aptent comprehensam tamquam dictumst rutrum' },
{ title: 'Bubble',
  content:
   'agam viderer velit adipisci accommodare movet mentitum sed ridens sed vero iuvaret interdum parturient comprehensam risus qui risus penatibus scelerisque sit sale tibique error atomorum causae proin gloriatur primis molestiae leo etiam ne platonem usu harum fabulas reprimique inciderint necessitatibus posuere salutatus consul tellus cetero definitionem facilis habitasse sumo menandri vero partiendo tritani eu scripserit equidem facilisis ea diam gubergren sonet ceteros liber appareat graeci laoreet instructior lacus utinam gravida delicata mi novum reprehendunt posse hendrerit tincidunt veniam posuere viris contentiones electram minim sonet eius netus libris ad ne mattis consequat equidem detracto ne electram bibendum falli fastidii latine dicunt ocurreret regione ne vituperata leo ultricies cras adipiscing ridiculus luptatum mei interesset ullamcorper ad magna comprehensam ius tractatos quot vivamus imperdiet gravida mnesarchum himenaeos tale eu necessitatibus fabulas mea dicta vel dis himenaeos numquam sociosqu gubergren himenaeos honestatis eius repudiandae tractatos omnesque principes habitasse sem commune veri quod aeque enim mediocritatem te agam legimus eget comprehensam feugait sagittis atqui consequat gravida te vel affert alia interesset massa harum iaculis quas iisque omittantur verterem nostra disputationi tellus curae mauris lacinia qui nostrum appareat odio pericula dolore mnesarchum minim adhuc consequat honestatis aenean mnesarchum netus epicuri pertinacia graeco urna invenire aliquip petentium' },
{ title: 'Merge',
  content:
   'pertinax conubia graeco suscipiantur signiferumque tristique vestibulum delectus quo eleifend neglegentur augue vidisse nulla delenit lobortis dico veritus ac habeo intellegebat natoque deseruisse disputationi affert offendit morbi sed conclusionemque eum aliquid curabitur disputationi accommodare molestie arcu partiendo purus quis cursus deserunt eos aliquam lobortis nascetur noluisse patrioque euismod evertitur eros accumsan lacus alia bibendum regione mucius fames lacus vulputate lobortis suspendisse homero reprehendunt sagittis netus dicunt suavitate et euripidis ne adhuc placerat deseruisse saepe delicata felis honestatis praesent legimus minim decore affert lectus explicari regione odio elit explicari ridiculus dictum praesent mauris magnis aliquam tacimates dicam porta homero quam viris magna adipisci sit option noluisse postulant noster dapibus consequat aenean dicam risus gravida aenean numquam a eget bibendum persecuti posse latine interpretaris eos varius fringilla nisl mentitum habemus vidisse sociosqu singulis condimentum malorum recteque venenatis imperdiet docendi prompta debet fugit fabulas quaeque mnesarchum odio iusto malorum vis dui tempus facilis dis eros iusto donec doming odio adolescens quo hac eam petentium purus intellegebat venenatis dissentiunt suspendisse oporteat quam curabitur deserunt utamur aperiri quaestio quas signiferumque mandamus dicit dictas nascetur ullamcorper latine nullam pericula habitasse montes vitae efficitur condimentum comprehensam novum ubique duo vitae interpretaris persecuti his ornare atomorum id gloriatur' } ]);

  
}
  
  
  ,99999);
  it("Fetch category  Graph Theory", async () => {


    // work
    const categories = await getCategoryByName("Graph theory");
  //console.log(categories.articles);
    expect(categories.name).toEqual("Graph theory");
    expect(categories.articles).toEqual( [ { title: 'TopoSort',
    content:
     'volutpat dicunt indoctum quas inani porta pellentesque similique amet omnesque fabulas similique repudiandae pro efficiantur possim mea cu liber orci dicam singulis quam definitiones lorem montes ut conubia debet malorum senserit atqui nonumy vix harum vim platonem vituperata quaestio definitiones tale interesset noluisse petentium libero lacinia et maximus elementum eam contentiones mattis legere pro prompta disputationi veniam oporteat dapibus dolorem intellegebat non postea verear pertinacia nullam fusce putent pertinax equidem aenean orci porro sollicitudin commodo signiferumque quod persecuti iudicabit litora inani eget quis vituperata antiopam brute partiendo eu mazim ridiculus partiendo sapientem natoque habitant doming contentiones natum porta quod mazim mei ei sale libero referrentur primis nisl pertinax turpis honestatis nibh diam cras congue libero persequeris voluptaria sapien euismod ornatus dicta magna homero tincidunt dico dicant habitasse propriae singulis partiendo eleifend dictum luptatum varius luctus error contentiones inani enim senserit impetus nec nonumes pulvinar sit an torquent vivendo saepe feugait conclusionemque fringilla tempor diam theophrastus novum intellegebat vero consetetur facilis neglegentur neque curae porro primis reque erroribus propriae instructior scripserit consul vitae legere autem senserit quod vidisse cubilia mandamus neglegentur adipiscing solum populo mel dicat mattis turpis definitionem dictumst minim invenire vituperatoribus moderatius sanctus himenaeos deterruisset condimentum phasellus lacinia prompta' },
  { title: 'MST',
    content:
     'mucius falli himenaeos dapibus mnesarchum nominavi sodales mea delenit decore necessitatibus pertinax veri saperet reprimique omnesque homero repudiare nostrum varius suspendisse saperet hac meliore eget fames elit sanctus nisi duo blandit nulla graeco appareat nonumes suspendisse inimicus cursus comprehensam ornare viris docendi efficiantur doctus maecenas risus eleifend iudicabit sed efficiantur sonet mus suspendisse graeci civibus risus rutrum nonumy mentitum tristique interdum tristique pellentesque tota consul persecuti ut constituam dicat habeo molestie maluisset lacus commodo moderatius his propriae cursus laoreet postea dolor proin sonet est minim mazim vivendo eget noster eleifend prodesset graeci idque falli fusce consectetuer iuvaret decore discere tale instructior movet lectus putent aliquid commodo mediocritatem detraxit reque oratio autem mei vocibus regione periculis commune vel sed mattis referrentur verterem euripidis civibus elitr malesuada blandit tacimates sociosqu quem impetus amet eruditi honestatis netus congue mi vivamus pretium maximus phasellus fastidii detracto convenire idque noluisse habemus est dissentiunt qualisque vim nunc vituperata appetere efficiantur evertitur sit sadipscing nascetur maluisset sapien iusto reprehendunt volutpat dolorem possim necessitatibus esse sagittis laudem dolores detraxit dicam solum movet sociosqu regione harum himenaeos viderer sapientem quidam mediocrem aenean enim vocibus feugait alia varius vivendo pretium altera facilis duis saperet commodo turpis veritus fuisset mazim habemus' },
  { title: 'Dijkstra',
    content:
     'evertitur hac ancillae morbi omnesque similique magnis tale intellegebat indoctum atqui ullamcorper vix erat nostrum repudiandae lorem habemus invenire non platonem no eu adipisci ridiculus quaeque meliore dolore alienum graecis latine ne morbi eu fuisset gravida persecuti mei vivendo adversarium habitant ultricies agam quam sumo definiebas corrumpit aliquid pharetra perpetua vel praesent mei periculis in sanctus legere ipsum accommodare reprehendunt sit mauris per cetero repudiare oratio nibh aenean ex appetere gubergren antiopam lobortis quaeque vocibus tale disputationi moderatius quaestio eget sapien dicat decore interesset semper lacus dolorem reprehendunt mediocritatem percipit graecis eos laudem elitr solet interesset semper explicari pretium proin adversarium efficitur ipsum patrioque quas quem montes sodales lacinia simul mollis feugiat condimentum mediocritatem solet latine pro elaboraret ante ludus vidisse porttitor deterruisset etiam posuere mandamus vituperatoribus qualisque senectus latine quod torquent torquent consectetuer taciti ludus repudiare ipsum luptatum suavitate aliquam litora donec leo facilis integer iuvaret sententiae vitae similique turpis sollicitudin massa platea has quam mollis omnesque id diam viderer simul scripta saperet luptatum accusata tristique habemus hinc contentiones donec assueverit definiebas omnesque quaerendum idque est senserit duis nonumy libris eripuit interdum efficiantur pericula quas tortor primis moderatius ridens placerat id vulputate dicit ipsum mentitum finibus viderer aliquid montes' } ]);
   
  }
    
    
    ,99999);

    it("Fetch category Data structures", async () => {


      // work
      const categories = await getCategoryByName("Data structures");
  
      expect(categories.articles).toEqual([]);}
      
      ,99999);
      it("Bringing an article into the category Sort", async () => {


        // work
        const categories = await getArticleFromCategory("Sort","Quick");
        //console.log(categories);
        expect(categories).toEqual({ title: 'Quick',
        content:
         'duis oporteat percipit elementum malorum ultricies pharetra vivendo prompta gloriatur postea curabitur vocibus agam definitiones mel sagittis sagittis platea labores has his velit alia congue montes vidisse vivendo impetus viris has utinam veniam faucibus utinam repudiare perpetua commune quot massa maecenas dolorum adipiscing dignissim delenit tincidunt deseruisse dui deserunt sed utamur voluptatum liber nec invenire convallis habeo a causae lectus causae ea delectus unum menandri pro doctus eam dolore elitr ceteros tamquam ipsum posidonium justo vehicula ex luptatum verterem finibus moderatius imperdiet mucius dictum taciti quas condimentum mauris mnesarchum has ignota mucius quis idque suspendisse enim noluisse appareat recteque viderer atqui reformidans nobis detracto porta vituperata conceptam delicata at mentitum disputationi solum posse unum ancillae a vivendo dicant suspendisse omittam appetere dolorem ludus iusto conceptam platea pellentesque dolores aliquid sociosqu fabellas ei voluptaria ei lacinia vehicula maecenas erroribus cu has maximus facilis molestiae cetero inimicus falli quaerendum ultricies erroribus persius dolorum voluptatum eu iudicabit persequeris persequeris interesset viderer singulis prodesset elit primis nobis aliquid discere singulis potenti aliquip nihil oporteat convenire taciti fusce tale cetero decore neglegentur tempus pellentesque doming praesent delicata signiferumque fuisset adhuc interdum affert esse oratio pellentesque lectus veritus consectetur sociosqu pellentesque menandri dolorem legimus melius fabellas' }
);}
        
        ,99999);
        it("Bringing an article into the category Graph Theory", async () => {


          // work
          const categories = await getArticleFromCategory("Graph theory","MST");
          //console.log(categories);
          expect(categories).toEqual({"title":"MST","content":"mucius falli himenaeos dapibus mnesarchum nominavi sodales mea delenit decore necessitatibus pertinax veri saperet reprimique omnesque homero repudiare nostrum varius suspendisse saperet hac meliore eget fames elit sanctus nisi duo blandit nulla graeco appareat nonumes suspendisse inimicus cursus comprehensam ornare viris docendi efficiantur doctus maecenas risus eleifend iudicabit sed efficiantur sonet mus suspendisse graeci civibus risus rutrum nonumy mentitum tristique interdum tristique pellentesque tota consul persecuti ut constituam dicat habeo molestie maluisset lacus commodo moderatius his propriae cursus laoreet postea dolor proin sonet est minim mazim vivendo eget noster eleifend prodesset graeci idque falli fusce consectetuer iuvaret decore discere tale instructior movet lectus putent aliquid commodo mediocritatem detraxit reque oratio autem mei vocibus regione periculis commune vel sed mattis referrentur verterem euripidis civibus elitr malesuada blandit tacimates sociosqu quem impetus amet eruditi honestatis netus congue mi vivamus pretium maximus phasellus fastidii detracto convenire idque noluisse habemus est dissentiunt qualisque vim nunc vituperata appetere efficiantur evertitur sit sadipscing nascetur maluisset sapien iusto reprehendunt volutpat dolorem possim necessitatibus esse sagittis laudem dolores detraxit dicam solum movet sociosqu regione harum himenaeos viderer sapientem quidam mediocrem aenean enim vocibus feugait alia varius vivendo pretium altera facilis duis saperet commodo turpis veritus fuisset mazim habemus"})
           ;}
          
          ,99999);
          it("Bringing an article into the category Data structures", async () => {


            // work
            const categories = await getArticleFromCategory("Data structures","");
         
            expect(categories).toEqual([]);}
            
            ,99999);
