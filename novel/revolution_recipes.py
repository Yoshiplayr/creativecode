# This would install weasyprint and markovify if the # wasn't there, but github wouldn't update the changes with the ! there for some reason
# !pip install weasyprint
# !pip install markovify

from weasyprint import HTML

novel =''
import markovify
with open("BunchofScriptsFINAL.txt") as f:
    text = f.read()

text_model = markovify.Text(text)

# so, for whatever reason, if I set the range too high it would put half the text on one line, so I split it up into 3 to get all 50000 words
for i in range(2000):
    novel+=str(text_model.make_sentence())

for i in range(2000):
    novel+=str(text_model.make_sentence())

for i in range(1500):
    novel+=str(text_model.make_sentence())


print(novel)

# It took me a while to figure out the formatting, but I was able to mess with
# how many characters I had to get the title centered in the page

html_template = f"""

<html>
  <head><strong>––––––––– • ––––––––  The Elder Scrolls VI: Barry B. Powers vs Zilla  –––––––– • –––––––––</strong>
  <div> By: Todd Howard, J.R.R. Tolkien, Roland Emmerich, Saban, Jerry Seinfeld, and Mike Myers </div>
  <div>––––––––– • ––––––––––––––––– • ––––––––––––––––– • ––––––––––––––––– • –––––––––––
  </div>
  </head>
  <title>Skyrim</title>
  <body><div>
  {novel}</div>
  <head><div>DRAGONBORN will Return in THE AVENGERS</div>
  <div><strong>––––––––– • ––––––––  THE END  –––––––– • –––––––––</strong></div></head>
  <style>
   body {{
     font-family: Times New Roman;
     }} 
</html>
"""

HTML(string=html_template).write_pdf("TheElderScrollsVIFinalVersion.pdf")
