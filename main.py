from flask import Flask, request, jsonify
from flask_cors import CORS  # Important for handling cross-origin requests
from pptx import Presentation
from pptx.util import Inches

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from your frontend

@app.route('/generate_ppt', methods=['POST'])
def generate_ppt():
    try:
        data = request.get_json()
        title = data.get('title', 'Untitled Presentation')
        slides = data.get('slides', [])

        prs = Presentation()
        title_slide_layout = prs.slide_layouts[0]
        slide = prs.slides.add_slide(title_slide_layout)
        title_shape = slide.shapes.title
        title_shape.text = title

        for slide_data in slides:
            slide_title = slide_data.get('title', '')
            bullet_points = slide_data.get('bullet_points', [])

            slide_layout = prs.slide_layouts[1] # Use a bullet point layout
            slide = prs.slides.add_slide(slide_layout)
            title_shape = slide.shapes.title
            title_shape.text = slide_title

            textbox = slide.shapes.add_textbox(Inches(0.5), Inches(1.5), Inches(9), Inches(5))
            tf = textbox.text_frame
            for point in bullet_points:
                p = tf.paragraphs[0].add_paragraph()
                p.text = point


        prs.save('presentation.pptx')
        return jsonify({'message': 'Presentation generated successfully!', 'filename': 'presentation.pptx'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
