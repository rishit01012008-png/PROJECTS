import os
import shutil

def organise_folder(target_folder):
    print(f"Organising files in: {target_folder}")
    
    if not os.path.exists(target_folder):
        print(f"The folder '{target_folder}' does not exists.")
        return
    
    files = os.listdir(target_folder)

    for file in files:
        if os.path.isdir(os.path.join(target_folder, file)):
            continue

        filename,extension = os.path.splitext(file)
        if not extension:
            continue

        folder_name = extension[1:].upper() + "folder"

        folder_path = os.path.join(target_folder,folder_name)
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            print(f"Created new folder: {folder_name}")
        source_path = os.path.join(target_folder, file)
        destination_path = os.path.join(folder_path, file)

        shutil.move(source_path, destination_path)
        print(f"Moved '{file}' to ---> '{folder_name}'")

organise_folder(".")