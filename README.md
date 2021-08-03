# Hackathons
This is the Project of Polimi [Knowledge Engineering](https://www4.ceda.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2020&k_cf=225&k_corso_la=481&k_indir=T2A&codDescr=089012&lang=IT&semestre=2&idGruppo=4152&idRiga=253863) Course 2020/2021. <br>
Course Professor:  [Marco Colombetti](https://www.deib.polimi.it/ita/personale/dettagli/60520) <br>
Project Professor: [Riccardo Tommasini](https://riccardotommasini.com/) <br>
Project Slide: [HacKG-KE.pdf](https://github.com/ZHANG-Y-D/HacKG--KnowledgeEngineering-Polimi/blob/main/Documentation/HacKG-KE.pdf)


## Ontology
Hackathon ontology includes a set of classes and properties about Hackathon events.
* Hackathons: pieces of data describe Hackathon events
* Prizes: every Hackathon event sets up prizes
* Judges: every Hackathon event  has several judges
* Judging-criteria: Hackathon events have judging criteria
* Participants: relate to team members who consist of teams participating in projects
* Skills: participants have some skills which can be used as technologies  required by projects
* Projects: every project relates to a Hackathon event and  has several team members
* Technologies: required to complete projects
* Team-members: every project has a team including some members

## Data Linking

#### Data Retrieval 
The dataset is composed of many separate JSON files and stored in [Dropbox](https://www.dropbox.com/sh/4i4tp6y0kl2lk24/AAAnU8WV-XFa_cMGMNclrAiLa?dl=0), we wrote two Python scripts to download these files, merge them together and generate the RDF triples.
* [DownloadResourceFromDropbox.py](https://github.com/ZHANG-Y-D/HacKG--KnowledgeEngineering-Polimi/blob/main/DownloadResourceFromDropbox.py): To download (a part of) resource data.
* [Gen_RDF.py](https://github.com/ZHANG-Y-D/HacKG--KnowledgeEngineering-Polimi/blob/main/Gen_RDF.py): To merge all separate json files and generate the RDF triples.

**Attention**: The [Resources](https://github.com/ZHANG-Y-D/HacKG--KnowledgeEngineering-Polimi/tree/main/Resources) folder already contains a part of resource data, and if you want more, you can run the [DownloadResourceFromDropbox.py](https://github.com/ZHANG-Y-D/HacKG--KnowledgeEngineering-Polimi/blob/main/DownloadResourceFromDropbox.py).


#### YARRRML (https://rml.io/yarrrml/matey/#)
A set of rules has been written to fit the Hackathon ontology model. These R2RML rules have been written and parsed using the Yarrrml matey tool. In our cases:
* [hackathons.rml.ttl](https://github.com/ZHANG-Y-D/HacKG--KnowledgeEngineering-Polimi/blob/main/Ontologies_and_data/hackathons.rml.ttl): Rules mapping the hackathons associated to judges, prizes, and judging criteria. 
* [participants.rml.ttl](https://github.com/ZHANG-Y-D/HacKG--KnowledgeEngineering-Polimi/blob/main/Ontologies_and_data/participants.rml.ttl): Rules mapping the participants associated with skills. 
* [projects.rml.ttl](https://github.com/ZHANG-Y-D/HacKG--KnowledgeEngineering-Polimi/blob/main/Ontologies_and_data/projects.rml.ttl): Rules mapping the projects associated with hackathons, technologies, and team members. 



#### RMLMAPPER (https://github.com/RMLio/rmlmapper-java) 
The RDF triples have been generated from the rml rules. For this we used the rmlmapper.jar. <br>

    java -jar rmlmapper-4.9.0.jar.jar -m hackathons.rml.ttl -o hackathons.rdf
    java -jar rmlmapper-4.9.0.jar.jar -m participants.rml.ttl -o participants.rdf
    java -jar rmlmapper-4.9.0.jar.jar -m projects.rml.ttl -o projects.rdf

## Publishing & Querying
1. SPARQL endpoint was created using Apache- Jena-Fuseki.
2. Converted RDF triples to N-triple format and upload them to Fuseki as datasets.
3. Translated competency questions to SPARQL.




## Competency Questions with querying code
* What are the projects with at least two participants?
  ```
    SPARQL:
    PREFIX hac: <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#>
    
    SELECT ?project ?title ?teamsize
    WHERE {
        ?project a  <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#projects>.
        ?project hac:project-title ?title.
        ?project hac:team-size ?teamsize.
        FILTER(?teamsize>=2).
    }
    ORDER BY (?teamsize)
  ```
* Which co-located projects have more than 5 judges?
  ```
    SPARQL:
    PREFIX hac: <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#>
    
    SELECT ?hackathon ?colocated ?numOfJudges
    WHERE {
        ?hackathon a  <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#hackathons>.
        ?hackathon hac:hackathon-is-colocated ?colocated.
        ?hackathon hac:hackathon-number-of-judges ?numOfJudges
        FILTER(?colocated="True" && ?numOfJudges>=5)
    }
  ```
* What projects are included in Hackathon events located in New York or West Lafayette?
  ```
    SPARQL:
    PREFIX hac: <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#>
    
    SELECT ?project ?hackathon ?address
    WHERE {
        ?project a <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#projects>.
        ?project hac:hackathonOf ?hackathon.
        ?hackathon a  <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#hackathons>.
        ?hackathon hac:hackathon-end-date ?endDate.
        ?hackathon hac:hackathon-location-address ?address.
        FILTER( regex(?address,"West Lafayette") || regex(?address,"New York"))
    }
  ```
  
* Who are the judges participating in more than one hackathon event?
  ```
    SPARQL:
    PREFIX hac: <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#>
    SELECT ?judge ?role ?total_hack
    WHERE{
        ?judge hac:judge-role ?role
        {
            SELECT ?judge (count(?hackathon) as ?total_hack)
            WHERE {
                    ?judge a <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#judges>.
                    ?hackathon a <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#hackathons>.  
                    ?hackathon hac:hasJudge ?judge.
                    ?judge hac:judge-name ?name.
                }group by (?judge) order by desc(?total_hack)
                }FILTER(?total_hack>1)
    }
  ```
* What projects did "Anano Bodokia" participate in?
    ```
    SPARQL:
    PREFIX hac: <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#>
    
    SELECT ?project ?url ?teammember ?participant
    WHERE {
      ?participant a <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#participants>.
      ?participant hac:participant-name ?name.
      ?teammember hac:relatesToParticipant ?participant.
      ?project a  <http://www.semanticweb.org/hezhang/ontologies/2021/6/Hackathon#projects>.
      ?project hac:hasTeamMember ?teammember.
      ?project hac:project-url ?url
      FILTER(?name="Anano Bodokia")
    }
    ```

## Author
[He Zhitao](https://github.com/zhitaohe-polimi)    <br>
[Zhang Yuedong](https://github.com/ZHANG-Y-D)
