import re

def reverse_words(text):
    parts = re.split(r'(\s+)', text)
    reversed_parts = [part[::-1] for part in parts]
    return ''.join(reversed_parts)

def process_file(input_file, output_file):
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            data = f.read()
    except Exception as e:
        print('Помилка читання файлу:', e)
        return

    reversed_text = reverse_words(data)

    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(reversed_text)
        print(f'Файл успішно збережено як {output_file}')
    except Exception as e:
        print('Помилка запису файлу:', e)

input_file_path = 'input.txt'
output_file_path = 'output.txt'

process_file(input_file_path, output_file_path)
