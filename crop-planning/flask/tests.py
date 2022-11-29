import unittest
import app
from flask import Flask, jsonify, request, render_template

testapp = app.Flask(__name__)

class TestGETandPOST(unittest.TestCase):
    def test_flask_example(self):
        self.app.get('/test', data = dict(var1='I totally agree that SoilLab > FarmBot!'))
        self.app.post('/test', data= dict(var1='Success'))

if __name__ == '__main__':
    unittest.main()