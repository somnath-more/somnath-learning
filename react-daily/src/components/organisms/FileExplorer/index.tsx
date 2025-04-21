import React, { useState } from 'react';

interface FileNode {
  id: number;
  name: string;
  isOpen?: boolean;
  children?: FileNode[];
}

const initialData: FileNode[] = [
  { id: 1, name: 'README.md' },
  {
    id: 2,
    name: 'Documents',
    children: [
      { id: 3, name: 'Word.doc' },
      { id: 4, name: 'Powerpoint.ppt' },
    ],
  },
  {
    id: 5,
    name: 'Downloads',
    children: [
      { id: 6, name: 'unnamed.txt' },
      {
        id: 7,
        name: 'Misc',
        children: [
          { id: 8, name: 'foo.txt' },
          { id: 9, name: 'bar.txt' },
        ],
      },
    ],
  },
];

const FileExplorer: React.FC = () => {
  const [fileData, setFileData] = useState<FileNode[]>(initialData);

  const toggleOpenById = (data: FileNode[], id: number): FileNode[] => {
    return data.map((item) => {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen };
      }
      if (item.children) {
        return { ...item, children: toggleOpenById(item.children, id) };
      }
      return item;
    });
  };

  const handleClick = (id: number) => {
    const updatedData = toggleOpenById(fileData, id);
    setFileData(updatedData);
  };

  const renderFileData = (data: FileNode[]): JSX.Element[] => {
    return data.map((item) => (
      <div key={item.id}>
        <span
          onClick={() => handleClick(item.id)}
          style={{ cursor: 'pointer' }}
        >
          📄 {item.name}
        </span>
        {item.isOpen && item.children && (
          <div style={{ paddingLeft: '20px' }}>
            {renderFileData(item.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div>
      <h2>📁 File Explorer</h2>
      {renderFileData(fileData)}
    </div>
  );
};

export default FileExplorer;
