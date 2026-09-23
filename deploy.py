import os, shutil, subprocess

def run(cmd):
    print("Running:", cmd)
    subprocess.run(cmd, shell=True, check=True)

out_dir = "out"
temp_out = "../temp_out"
if os.path.exists(temp_out):
    shutil.rmtree(temp_out)
shutil.copytree(out_dir, temp_out)

print("Cleaning working directory...")
for item in os.listdir("."):
    if item == ".git" or item == "deploy.py":
        continue
    if os.path.isdir(item):
        shutil.rmtree(item)
    else:
        os.remove(item)

print("Copying static files to root...")
for item in os.listdir(temp_out):
    s = os.path.join(temp_out, item)
    d = os.path.join(".", item)
    if os.path.isdir(s):
        shutil.copytree(s, d)
    else:
        shutil.copy2(s, d)

open(".nojekyll", "w").close()

print("Committing and pushing...")
run("git add .")
run('git commit -m "Deploy static site to main root"')
run("git push -f origin main")

print("Done!")
