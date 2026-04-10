import type { SvgComponent } from 'astro/types';
import type { ImageMetadata } from 'astro';

import Php from '@/assets/icons/php.svg';
import Laravel from '@/assets/icons/laravel.svg';
import Javascript from '@/assets/icons/javascript.svg';
import React from '@/assets/icons/reactjs.svg';
import Nodejs from '@/assets/icons/nodejs.svg';
import Git from '@/assets/icons/git.svg';
import Docker from '@/assets/icons/docker.svg';
import Kubernetes from '@/assets/icons/kubernetes.svg';
import GoogleCloud from '@/assets/icons/googlecloud.svg';
import Aws from '@/assets/icons/aws.svg';
import Linux from '@/assets/icons/linux.svg';
import Mysql from '@/assets/icons/mysql.svg';
import Mongodb from '@/assets/icons/mongodb.svg';
import Redis from '@/assets/icons/redis.svg';
import Rabbitmq from '@/assets/icons/rabbitmq.svg';

type Skill = {
  name: string;
  icon: SvgComponent & ImageMetadata
}

export const skills = [
  { name: 'PHP', icon: Php },
  { name: 'Laravel', icon: Laravel },
  { name: 'JavaScript', icon: Javascript },
  { name: 'React', icon: React },
  { name: 'Node.js', icon: Nodejs },
  { name: 'Git', icon: Git },
  { name: 'Docker', icon: Docker },
  { name: 'Kubernetes', icon: Kubernetes },
  { name: 'Google Cloud', icon: GoogleCloud },
  { name: 'AWS', icon: Aws },
  { name: 'Linux', icon: Linux },
  { name: 'MySQL', icon: Mysql },
  { name: 'MongoDB', icon: Mongodb },
  { name: 'Redis', icon: Redis },
  { name: 'RabbitMQ', icon: Rabbitmq },
] as Skill[];
