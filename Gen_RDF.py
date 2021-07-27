import os
import subprocess
import shutil

typeName = ""
path = ""
newpath = ""


def process_files(typeName, path, newpath):
    path = "Resources/%s" % typeName
    newpath = "Resources/%s-rdf" % typeName
    integration_path = os.path.join(newpath, typeName + ".rdf")
    integration_file = open(integration_path, 'a+')
    print(integration_path)

    integration_json_path = os.path.join(newpath, typeName + "_total.json")
    integration_json_file = open(integration_json_path, 'a+')
    w = integration_json_file.write("[")

    old_names = os.listdir(path)
    total_count = 0
    for index, old_name in enumerate(old_names):
        if old_name.endswith('.json'):
            total_count = total_count + 1
    for index, old_name in enumerate(old_names):
        if old_name.endswith('.json'):
            front_name = old_name.split('.')
            print(front_name)
            name = front_name[0]
            try:
                command = "java -jar rmlmapper-4.9.0.jar -m %s.rml.ttl -o %s-%s.rdf" % (typeName, typeName, name)
                shutil.copyfile(os.path.join(path, old_name), os.path.join(newpath, "%s.json" % typeName))
                subprocess.check_call(command, shell=True, cwd=newpath)
                print(command)

                s = integrate_rdf("%s-%s.rdf" % (typeName, name), newpath)
                w = integration_file.write(s)

                s_json = integrate_json("%s.json" % (name), path)
                if index == total_count - 1:
                    w = integration_json_file.write(s_json)
                else:
                    w = integration_json_file.write(s_json + ",\n")
            except Exception as e:
                print("error,%s" % e)

    w = integration_json_file.write("]")
    integration_file.close()
    integration_json_file.close()


def integrate_rdf(rdfName, path):
    individual_par_path = os.path.join(path, rdfName)
    indi_par_file = open(individual_par_path, 'r')
    s = indi_par_file.read()

    indi_par_file.close()
    # print(s)

    return s


def integrate_json(jsonName, path):
    individual_par_path = os.path.join(path, jsonName)
    indi_par_file = open(individual_par_path, 'r')
    s = indi_par_file.read()

    indi_par_file.close()
    # print(s)

    return s


# process_files("participants",path,newpath)
# process_files("hackathons",path,newpath)
process_files("projects", path, newpath)
