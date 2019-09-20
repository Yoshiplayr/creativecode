from google.colab import files

uploaded = files.upload()
for fn in uploaded.keys():
  text = uploaded[fn].decode()
  
  
import random
from textblob import TextBlob

import nltk
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

with open('skyrim32.txt', 'r') as file:
    text = file.read()

blob = TextBlob(text)

adjectives = []
nouns = []
verbs = []
adverbs = []
propernouns = []
prep = []
perpro = []
conj = []
inter = []
presverb = []

for word,pos in blob.tags:
    if (pos == 'JJ'):
        adjectives.append(word)
    if (pos == 'NN'):
        nouns.append(word)
    if (pos == 'VBG'):
        verbs.append(word)
    if (pos == 'RB'):
        adverbs.append(word)
    if (pos == 'NNP'):
        propernouns.append(word)
    if (pos == 'IN'):
        prep.append(word)
    if (pos == 'PRP'):
        perpro.append(word)    
    if (pos == 'CC'):
        conj.append(word)
    if (pos == 'UH'):
        inter.append(word)
    if (pos == 'VBP'):
        presverb.append(word)
        
for i in range(3):
    a = random.choice(adjectives)
    b = random.choice(nouns)
    b2 = random.choice(nouns)
    c = random.choice(verbs)
    d = random.choice(adverbs)
    e = random.choice(propernouns)
    f = random.choice(prep)
    g = random.choice(conj)
    g2 = random.choice(conj)
    e2 = random.choice(propernouns)
    h = random.choice(inter)
    i = random.choice(perpro)  
    j = random.choice(presverb)
    
    print(e,'and',e2,c)
    print(e,c,b)
    print(e2,c,b2)
