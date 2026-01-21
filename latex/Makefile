.PHONY: all clean

DIRS := doctorate english spanish
TARGETS := $(addsuffix /cv.pdf,$(DIRS))

all: $(TARGETS)

%/cv.pdf: %/*.tex
	cd $* && pdflatex cv.tex

clean:
	for dir in $(DIRS); do cd $$dir && rm -f *.aux *.log *.out *.pdf *.bcf *.run.xml && cd ..; done
