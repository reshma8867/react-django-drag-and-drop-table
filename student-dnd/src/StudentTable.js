import { DndContext, closestCenter } from "@dnd-kit/core";

import { SortableContext, verticalListSortingStrategy,useSortable,arrayMove } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import "./StudentTable.css";

function SortableRow({ student }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: student.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.email}</td>
    </tr>
  );
}

export default function StudentTable({ students, setStudents }) {

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setStudents((items) => {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={students.map(s => s.id)}
        strategy={verticalListSortingStrategy}
      >
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map(student => (
              <SortableRow
                key={student.id}
                student={student}
              />
            ))}
          </tbody>
        </table>
      </SortableContext>
    </DndContext>
  );
}
