.PHONY: all clean

all: english/cv.pdf spanish/cv.pdf

english/cv.pdf: english/cv.tex
	cd english && pdflatex cv.tex

spanish/cv.pdf: spanish/cv.tex
	cd spanish && pdflatex cv.tex

clean:
	cd english && rm -f *.aux *.log *.out *.pdf *.bcf *.run.xml
	cd spanish && rm -f *.aux *.log *.out *.pdf *.bcf *.run.xml