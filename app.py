# app.py
import eel
import json

eel.init('web')

@eel.expose
def receive_object_from_js(json_str):
    try:
        # Parse the JSON string received from JavaScript
        data = json.loads(json_str)
        print("Object received from JS:", data)

        # You can now work with the Python object as needed.
        # Example: print(data['key1'])

    except json.JSONDecodeError as e:
        print("Error decoding JSON:", e)

eel.start('index.html', size=(800, 600))
