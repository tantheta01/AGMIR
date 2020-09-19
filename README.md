# **AUTOMATIC GENERATION OF MEDICAL IMAGING REPORTS

We aim to create n end to end solution for the problem of writing **medical reports from medical images**. Creating medical reports from images such as XRays and other scans may be error prone and tedious. ***AGMIR*** shall allow medical practitioners to automatically generate medical reports and also organize them effectively. We use a *multilabel classifier* to predict the tag to every part of the image and then an *LSTM based sentence model* to generate descriptions for the tags. 
The project borrows it's idea from the research paper **On the Automatic generation of medical reports** : https://arxiv.org/abs/1711.08195
