import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    {
      id: 1,
      name: 'John Doe',
      weapon: 'sword',
      type: 'warrior',
    },
    {
      id: 2,
      name: 'Jane Smith',
      weapon: 'bow',
      type: 'archer',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      weapon: 'axe',
      type: 'warrior',
    },
    {
      id: 4,
      name: 'Alice Williams',
      weapon: 'dagger',
      type: 'rogue',
    },
    {
      id: 5,
      name: 'Mike Brown',
      weapon: 'staff',
      type: 'mage',
    },
    {
      id: 6,
      name: 'Sarah Davis',
      weapon: 'hammer',
      type: 'warrior',
    },
    {
      id: 7,
      name: 'Alex Lee',
      weapon: 'crossbow',
      type: 'archer',
    },
    {
      id: 8,
      name: 'Emily Wilson',
      weapon: 'dual swords',
      type: 'warrior',
    },
    {
      id: 9,
      name: 'Jake Miller',
      weapon: 'poisoned darts',
      type: 'rogue',
    },
    {
      id: 10,
      name: 'Linda Anderson',
      weapon: 'wand',
      type: 'mage',
    },
  ];

  getNinjas(weapon?: `bow` | `sword`, type?: `warrior` | `archer`) {
    if (weapon && type) {
      return this.ninjas.filter(
        (ninja) => ninja.weapon === weapon || ninja.type === type,
      );
    } else if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    } else if (type) {
      return this.ninjas.filter((ninja) => ninja.type === type);
    }
    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (!ninja) {
      throw new Error(`ninja not found`);
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);

    return newNinja;
  }

  updateNinjaTest1(id: number, updateNjaDto: UpdateNinjaDto) {
    const ninjaIndex = this.ninjas.findIndex((ninja) => ninja.id === id);

    if (ninjaIndex !== -1) {
      this.ninjas[ninjaIndex] = { ...this.ninjas[ninjaIndex], ...updateNjaDto };
      return this.getNinja(id);
    } else {
      throw new Error(`Ninja with ID ${id} not found.`);
    }
  }

  updateNinja(id: number, updateNjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id == id) {
        return { ...ninja, ...updateNjaDto };
      }
      return ninja;
    });
    return this.getNinja(id);
  }

  removeTestNinja(id: number) {
    const toBeRemove = this.getNinja(id);

    if (toBeRemove) {
      this.ninjas = this.ninjas.filter((ninja) => ninja.id === id);
      return toBeRemove;
    } else {
      throw new Error(`Ninja with ID ${id} not found.`);
    }
  }
  
  removeNinja(id: number) {
    const toBeRemove = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id === id);
    return toBeRemove;
  }
}
