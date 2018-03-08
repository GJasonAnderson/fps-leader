#!/bin/python3

# mkmsgs.py
# =========
# The purpose of mkmsgs.py is to take as input a mkdocs directory
# and convert all the docs intended for publishing on the resulting
# website into markdown-formatted text, ready to send out by email.

def main():
    pages = []
    titles = []
    yml_file = open("mkdocs.yml", "r")
    for line in yml_file:
        if line.startswith("    - "):
            pages.append(line[(2 + line.find(": ")):].strip("\n"))
            titles.append(line[6:line.find(": ")])
    yml_file.close
    txt_file = open("message.md", "w")
    for i in range(len(pages)):
        txt_file.write(titles[i] + "\n")
        txt_file.write(("=" * len(titles[i])) + "\n")
        file_name = "docs/" + pages[i]
        doc_file = open(file_name, "r")
        for line in doc_file:
            if line == "<!--End of Markdown Content-->\n":
                break
            elif line.startswith("<"):
                pass
            else:
                txt_file.write(line)
        doc_file.close
    txt_file.close
    print("The following mkdocs pages processed and saved in message.md:")
    for i in range(len(pages)):
        print("\t", pages[i], "-", titles[i])
main()
