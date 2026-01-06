from django.shortcuts import render,HttpResponse
from .models import Student
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

def student_list(request):
    students = Student.objects.all().order_by('position')
    return render(request, 'student.html', {'students': students})


def save_order(request):
    if request.method == 'POST':
        data = json.loads(request.body)

        for item in data:
            student=Student.objects.get(id=item['id'])
            student.position=item['position']
            student.save()

        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})


def student_api(request):
    students = Student.objects.all().order_by('position')
    data = [
        {
            "id": s.id,
            "name": s.name,
            "age": s.age,
            "email": s.email,
            "position": s.position
        }
        for s in students
    ]
    return JsonResponse(data, safe=False)